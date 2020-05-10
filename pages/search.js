import withBasicLayout from '../components/layouts/basic-layout/withBasicLayout'
import SearchBar from '../components/search/search-bar/SearchBar'
import SearchCard from '../components/search-card/SearchCard'
import { getDoctorsList } from '../services/api'
import Moment from 'moment';
import classNames from 'classnames';
import { Affix } from 'antd'
class search extends React.Component {
    constructor(){
        super()
        this.state = {
            doctors: [],
            dates: [
                Moment(),
                Moment().add("days", 1),
                Moment().add("days", 2),
                Moment().add("days", 3),
                Moment().add("days", 4),
            ],
            isFixed: false
        }
    }
    componentDidMount(){
        getDoctorsList()
        .then(res => {
            this.setState({
                doctors: [...res.data.data].filter(doctor => doctor.appointments && doctor.appointments.length > 0)
            })
        })
    }
    onDateChange = dates => this.setState({dates})
    render() {
        const { doctors, isFixed } = this.state
        console.log({
            doctors
        })
        return (
            <div className="c-search">
                <SearchBar />
                <div className={classNames({
                    "container": true,
                    // "container-fluid": isFixed,
                })}>
                    <div className="p-5"></div>
                    <Affix offsetTop={0} onChange={isFixed=> this.setState({isFixed})} >
                        <SearchCard showControl={true} dates={this.state.dates} onDateChange={this.onDateChange} onlyDates={true} doctor={{}} />
                    </Affix>
                </div>
                <div className="container" >
                    {
                        doctors.map((doctor, i) => <SearchCard key={i} dates={this.state.dates} doctor={doctor} />)
                    }
                    <div className="p-5"></div>
                </div>
            </div>
        )
    }
}

export default withBasicLayout(search)