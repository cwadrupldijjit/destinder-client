import React, { Component } from "react";
import { getMatchingUsers } from '../../actions/lfg_index';
import {
    Form,
    Button,
} from "semantic-ui-react";
import { Toggle, CheckboxField, LabelInputField, SelectField, TextAreaField } from 'react-semantic-redux-form';
import { Field, reduxForm } from 'redux-form';
import UserSearch from './LfgUserSearch';
import {pveOptions, pvpOptions, raidOptions, teamOptions} from '../../data/DropdownOptions';

const validate = values => {
    const errors = {}
    if (!values.message) {
        errors.message = 'Please enter a message.'
    } else if (values.message.length > 60) {
        errors.message = 'Must be 60 characters or less'
    }
    if (!values.mode) {
        errors.mode = 'Please select a game type.'
    }

    if (!values.looking_for) {
        errors.looking_for = 'Please select an option.'
    }

    if (!values.character_id) {
        errors.character_id = 'Please select a character.'
    }
    return errors
}


class NewLfgPost extends Component {
    state = { checked: false, raid: false }

    handleChange = (e, { value }) => {
        this.props.change('fireteam', value)
    }

    handleSearchChange = (e, data) => {
        getMatchingUsers(data.searchQuery);
    }

    handleGameTypeChange = (e, value) => {        
        if (value === 4) {
            this.setState({ raid: true })
        } else {
            this.setState({ raid: false })
        }
        
    }

    toggle = () => this.setState({ checked: !this.state.checked })

    
    render() {

        // const raidOptions = 
        //     switch(this.state.)

        const { handleSubmit} = this.props;

        
        return (
            <Form onSubmit={handleSubmit} inverted>
                <Form.Group>
                    <Form.Field width={3}>
                        <label className="form-label">Mode</label>
                        <div style={{ display: "inline-flex", marginTop: "3%" }}>
                            <span style={{ color: "#f5f5f5", marginRight: "10%" }}>
                                PVE
                            </span>{" "}
                            <Field
                                component={Toggle}
                                label='PVP'
                                width={8}
                                name='game_mode_toggle'
                                onChange={this.toggle}
                                checked={this.state.checked}
                            />
                        </div>
                    </Form.Field>

                    <Form.Field width={6}>
                        <Field 
                            component={SelectField} 
                            name='mode' 
                            label="Game Type" 
                            options={this.state.checked ? pvpOptions : pveOptions} 
                            onChange={this.handleGameTypeChange}
                            placeholder="Story"
                         />
                    </Form.Field>

                    <Form.Field width={7} disabled={!this.state.raid}>
                        <Field
                            component={SelectField}
                            name='checkpoint'
                            label="Checkpoint"
                            options={raidOptions}
                        />
                    </Form.Field>
                </Form.Group>

                <Form.Group>
                    <Form.Field width={3}>
                        <Field
                            fluid
                            component={SelectField}
                            name='character_id'
                            label="Character"
                            options={this.props.characters}
                        />
                    </Form.Field>
                    <Form.Field width={6}>
                        <Field
                            component={SelectField}
                            name='looking_for'
                            label="Looking For..."
                            options={teamOptions}
                        />
                    </Form.Field>
                    <UserSearch formProps={this.props} />
                </Form.Group>
                <Field
                    component={TextAreaField}
                    name='message'
                    label="Message"
                    placeholder='Looking for one more...'
                />

                <Field name='has_mic' component={CheckboxField}
                    label='I have a mic!' />
                <Field name='fireteam' component={LabelInputField}
                    style={{ display: 'none' }}
                />
                <Form.Field
                    control={Button}
                    color='yellow'
                    inverted
                    className='submit-btn'
                    loading={this.props.fetching}
                    type='submit'>
                    Create Post
                </Form.Field>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'lfgForm',
    validate
})(NewLfgPost)