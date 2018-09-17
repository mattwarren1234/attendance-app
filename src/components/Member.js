// import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

class Member extends React.Component {
    //member-page class does nothing right now
  render() {
    return (
      <div className="member-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <div className="row">
                      <div className="col">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        value={this.props.namefirst}
                        onChange={this.changeTitle} />
                      </div>
                      <div className="col">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={this.props.namelast}
                        onChange={this.changeTitle} />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-md"
                      type="text"
                      placeholder="Phone"
                      value={this.props.phone}
                      onChange={this.changeTitle} />
                  </fieldset>
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    disabled={this.props.inProgress}
                    onClick={this.submitForm}>
                    Submit New Member
                  </button>

                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Member;
