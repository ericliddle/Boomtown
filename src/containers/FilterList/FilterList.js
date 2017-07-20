import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';

const FilterList = ({ selectValues, dispatch, onChangeAction }) => {
    const tags = [
        'Electronics',
        'Household Items',
        'Musical Instruments',
        'Physical Media',
        'Recreational Equipment',
        'Sporting Goods',
        'Tools',
    ];

    return (
        <SelectField
            multiple
            hintText={'Filter by Tag'}
            value={selectValues}
            onChange={(event, index, values) => dispatch(onChangeAction(values, selectValues))}
        >
            {tags.map((tag) => (
                <MenuItem
                    key={tag}
                    insetChildren
                    checked={selectValues && selectValues.includes(tag)}
                    value={tag}
                    primaryText={tag}
                />
            ))}
            </SelectField>
    );
};

export default connect()(FilterList);
