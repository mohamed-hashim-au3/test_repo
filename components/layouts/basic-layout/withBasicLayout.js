import Head from 'next/head'
import Router from 'next/router'
import {compose} from "redux";
import { connect } from 'react-redux'
import { PROJECT_NAME, GOOGLE_API_KEY } from '../../../constants/projectKeys'
import { mainMenus } from "../../../constants/messages/menus"
import Header from '../../header/Header'
import '../../../style/app.scss'
import { getSpecialities } from '../../../redux/actions'
import Footer from '../../footer/Footer';

const withBasicLayout = (PassedComponent) => {
    return class extends React.Component {
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
            console.log({
                getInitialProps : PassedComponent.getInitialProps,
                PassedComponent,
                props: this.props
            })
            if(this.props.loggedInDoctor._id){
                Router.push("/doctor/dashboard")
            }
        }
        componentDidUpdate(prevProps){
            if(prevProps.loggedInDoctor !== this.props.loggedInDoctor){
                if(this.props.loggedInDoctor._id){
                    Router.push("/doctor/dashboard")
                }
            }
        }
        render(){
            const {
                children,
                ...props
            } = this.props
            if(!this.props.isPersist || this.props.loggedInDoctor._id){
                return <>
                <script src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`} async defer></script>
                <div/>
                </>
            }
            return (
                <div className="c-layout c-layout--basic">
                    <Head>
                        <title>{PROJECT_NAME}</title>
                        <link rel="icon" href="/favicon.png" />
                    </Head>
                    <script src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`} async defer></script>
                    <Header mainMenus={mainMenus} />
                    <PassedComponent {...props} >{children}</PassedComponent>
                    <Footer />
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    specialities: state.specialities,
    loggedInDoctor: state.loggedInDoctor,
})
const mapActionToProps = {
    getSpecialities
}
export default compose(connect(mapStateToProps, mapActionToProps), withBasicLayout)