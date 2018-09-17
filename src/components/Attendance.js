import React from 'react';
import ReactAutocomplete from 'react-autocomplete';
import agent from '../agent';

import {
    SAVE_BY_DAY
} from '../constants/actionTypes';

// i don't know what happens here
// fuck you pass in dispatch as a param
// its a function and then you return obejct
const mapDispatchToProps = dispatch => ({
    // confused. where dispatch from? why a mix of name and unnamed
    // its an object you call dispatch with
    onSubmit: payload => 
        dispatch({ type : SAVE_BY_DAY, payload })
})

class Attendance extends React.Component {
    constructor() {
        super();
        this.submitForm = ev => {
          ev.preventDefault();
          const article = {
            title: this.props.title,
            description: this.props.description,
            body: this.props.body,
            tagList: this.props.tagList
          };

          const slug = { slug: this.props.articleSlug };
          const promise = this.props.articleSlug ?
            agent.Articles.update(Object.assign(article, slug)) :
            agent.Articles.create(article);

          this.props.onSubmit(promise);
        };
    }
    
    state = { value : '' }
    render() {
        return (
            <div className="container page">
                <h2> IT works! </h2>
                <ReactAutocomplete
                    items={[
                      { id: 'foo', label: 'Matt Warren' },
                      { id: 'bar', label: 'bar' },
                      { id: 'baz', label: 'baz' },
                    ]}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                      <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                      >
                        {item.label}
                      </div>
                    }
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => this.setState({ value })}
                  />
                <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    disabled={this.props.inProgress}
                    onClick={this.submitForm}>
                    Save attendance
                </button>
            </div>
        );
    }
}

export default Attendance;