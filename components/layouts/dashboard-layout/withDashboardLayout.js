import Head from 'next/head'
import {compose} from "redux";
import { connect } from 'react-redux'
import Router from 'next/router'
import Link from 'next/link'
import { PROJECT_NAME, GOOGLE_API_KEY } from '../../../constants/projectKeys'
import '../../../style/app.scss'
import { getSpecialities, toggleDashboardCollapse } from '../../../redux/actions'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Row, Col, Button, Card, Avatar, Spin, Tooltip, Popconfirm, message } from "antd";
import { doctorDashboardMenu } from '../../../constants/messages/menus';
import DashboardNav from '../../dashboard-nav/DashboardNav';
import TimelineDrover from '../../timeline/TimelineDrover';
import LayoutDrawer from '../../layout-drawer/LayoutDrawer';
import { getDoctorById } from '../../../services/api';

const { Header: AntHeader, Content, Footer: AntFooter, Sider } = Layout;
const { SubMenu } = Menu;
const withDashboardLayout = (PassedComponent) => {
    return class extends React.Component {
        constructor(){
            super();
            this.state = {
                visible: true,
                filterappointmentarr: [],
                allAppointments: [],
            }
        }
        static getInitialProps = async ctx => {
            // const response = await ctx.apolloClient.query({ query: ME });
            
            // console.log("@withAuth ", response);

            // if (!response || !response.data || !response.data.me) {
            //   redirect(ctx, "/");
            //   return {
            //     me: null
            //   };
            // }

            // Get component’s props
            let componentProps = {}
            if (PassedComponent.getInitialProps) {
                componentProps = await PassedComponent.getInitialProps(ctx);
            }

            return {
                ...componentProps
            };
        }
        componentDidMount(){
            this.props.getSpecialities();
            const doctorId = this.props.loggedInDoctor._id;
            if(doctorId){
                getDoctorById(doctorId)
                .then(response => {
                  console.log('docdetailsashbaord', response.data.data.appointments);
          
                  let apparr = response.data.data.appointments
                  let filterapparr = apparr.filter(function (hero) {
                    return hero.booked === true;
                    // console.log('hero',hero.booked == true)
                  });
                  console.log('filterapparrrdata', apparr)
                  this.setState({
                    filterappointmentarr: filterapparr,
                    allAppointments: apparr
                  })
                  console.log('allApp', this.state.filterappointmentarr)
                })
                .catch(e => {
                  console.log('error', e);
                });
            }else{
                Router.push("/login")
            }
        }
        
        componentDidUpdate(prevProps){
            if(prevProps.loggedInDoctor !== this.props.loggedInDoctor){
                if(!this.props.loggedInDoctor._id){
                    Router.push("/login")
                }
            }
        }
        showDrawer = () => {
            this.setState({
              visible: true
            });
        };
        toggleDrawer = ()=> this.setState(prevState => ({visible: !prevState.visible}))
        onClose = () => {
            if (this.state.visible) {
              this.setState({
                visible: false
              });
            }
        };
        render(){
            const {
                children,
                dashboard,
                toggleDashboardCollapse,
                ...props
            } = this.props
            if(!this.props.isPersist){
                return <div />
            }
            if(!this.props.loggedInDoctor._id){
                return <div />
            }
            const {
                visible, filterappointmentarr, allAppointments
            } = this.state
            return (
                <div className="c-layout c-layout--dashboard">
                    <Head>
                        <title>{PROJECT_NAME}</title>
                        <link rel="icon" href="/favicon.png" />
                    </Head>
                    <script src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`} async defer></script>
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider width={300} collapsible collapsed={dashboard.collapsed} onCollapse={toggleDashboardCollapse}>
                            <strong className="c-logo">
                                <Link href="/" >
                                    <a>
                                        <img src="/images/logo-white.png" alt={PROJECT_NAME} />
                                    </a>
                                </Link>
                            </strong>
                            <DashboardNav items={doctorDashboardMenu} />
                        </Sider>
                        <Layout>
                            <LayoutDrawer 
                                    allAppointments={allAppointments}
                                    appointments={filterappointmentarr}>
                                <PassedComponent {...props} >{children}</PassedComponent>
                            </LayoutDrawer>
                            {/* <TimelineDrover /> */}
                            {/* <div
                                style={{
                                    paddingLeft: 50
                                }}
                                >
                                <Button onClick={this.showDrawer} className="fr timeline-toggle" type="primary">
                                    <Icon style={{ fontSize: 20 }} type="schedule" />
                                </Button>
                                <TimelineDrover visible={visible}
                                    onClose={() => {
                                        this.onClose();
                                    }}
                                    toggle={this.toggleDrawer}
                                    class="stop-2"
                                    allAppointments={allAppointments}
                                    appointments={filterappointmentarr}
                                />
                            </div> */}
                        </Layout>
                    </Layout>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    specialities: state.specialities,
    dashboard: state.dashboard,
    loggedInDoctor: state.loggedInDoctor,
})
const mapActionToProps = {
    getSpecialities,
    toggleDashboardCollapse
}
export default compose(connect(mapStateToProps, mapActionToProps), withDashboardLayout)