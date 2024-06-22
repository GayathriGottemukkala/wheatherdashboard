import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  margin: 20px;
  text-align: center;
`;

const Dropdown = ({ options, selected, onChange }) => (
  <DropdownContainer>
    <select value={selected} onChange={e => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </DropdownContainer>
);

export default Dropdown;
