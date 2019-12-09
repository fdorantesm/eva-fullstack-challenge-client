import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getExplorations} from '../../../store/explorations/explorationsActions';
import {Table, Pagination, PaginationItem, PaginationLink, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Explorations extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            page: 1,
            clinicName: 'SANTA_FE',
            from: moment().subtract(1, 'month').toDate(),
            to: moment().toDate(),
            consumedMedications: ['HORMONE_THERAPY'],
            mode: 'strict',
            limit: 100
        }
    }
    renderItem(exploration, index) {
        return (
            <tr key={exploration._id}>
                <td>{(index+1+((this.state.page-1) * this.state.limit))}</td>
                <td>{exploration.bookingId.name}</td>
                <td>{exploration.bookingId.email}</td>
                <td>{exploration.bookingId.clinicName}</td>
                <td>{exploration.bookingId.datetime}</td>
            </tr>
        )
    }
    componentDidMount() {
        this.props.getExplorations({...this.state});
    }
    renderTable(explorations = []) {
        if (Array.isArray(explorations)) {
            return explorations.map(this.renderItem);
        }
    }
    setPage(page) {
        this.setState({page}, () => {
            this.props.getExplorations({...this.state});
        })
    }
    renderPagination(data) {
        const pageItem = [];
        const max = data.totalPages < 5 ? data.totalPages : 5;
        for (let i= 1; i<=max; i++) {
            pageItem.push(
                <PaginationItem key={i}>
                    <PaginationLink onClick={(e) => this.setPage(i)}>{i}</PaginationLink>
                </PaginationItem>
            );
        }
        return (
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink first onClick={(e) => this.setPage(1)} disabled={this.state.page === 1} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous onClick={(e) => this.setPage(data.prevPage)} disabled={!data.hasPrevPage} />
            </PaginationItem>
            {
                pageItem.map(item => item)
            }
            <PaginationItem>
                <PaginationLink next onClick={(e) => this.setPage(data.nextPage)} disabled={!data.hasNextPage || this.state.page === data.totalPages} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last onClick={(e) => this.setPage(data.totalPages)} disabled={this.state.page === data.totalPages} />
            </PaginationItem>
        </Pagination>)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.getExplorations({...this.state});
        });
    }
    onDateChanges(name, value) {
        this.setState({
            [name]: moment(value).format('YYYY-MM-DD')
        }, () => {
            this.props.getExplorations({...this.state})
        });
        return value
    }
    render() {
        return (
            <div>
                <h1>Explorations</h1>
                <div>
                    <Form>
                        <FormGroup>
                            <Label>Clinic name</Label>
                            <Input name="clinicName" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                        <DatePicker name="from" selected={this.state.from} onChange={value => this.onDateChanges('from', value)} />
                        <DatePicker name="to" selected={this.state.to} onChange={value => this.onDateChanges('to', value)} />
                        </FormGroup>
                    </Form>
                </div>
                <div>
                    {this.renderPagination(this.props.explorations)}
                </div>
                <span>Total: {this.props.explorations.totalDocs}</span>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Clinic</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.props.explorations.docs)}
                    </tbody>
                </Table>
                <div>
                    {this.renderPagination(this.props.explorations)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  explorations: state.explorations
});
  
const mapDispatchToProps = dispatch => ({
  getExplorations: (params) => dispatch(getExplorations(params))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Explorations);
  