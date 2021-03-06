import React from 'react';
import styled from 'styled-components';
import {AkeneoThemedProps} from 'akeneo-design-system';

type Tag = 'new' | 'updates' | 'product_marketing';
type TagProps = {
  tag: Tag;
};

const TagComponent = (props: TagProps & any): JSX.Element => <StyledTag {...props}>{props.tag}</StyledTag>;

const StyledTag = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: ${({theme}: AkeneoThemedProps) => theme.fontSize.small};
  border-radius: 2px;
  margin-right: 10px;
  padding: 2px 5px;
  max-height: 24px;

  ${(props: TagProps & AkeneoThemedProps) => {
    switch (props.tag) {
      case 'new':
        return `
          background-color: #f5fafa;
          color: #5da8a6;
          border: 1px solid #81cccc;
        `;
      case 'updates':
        return `
          background-color: #f3eef9;
          color: #763e9e;
          border: 1px solid #9452ba;
        `;
      case 'product_marketing':
        return `
          background-color: #f0f7fc;
          color: #3278b7;
          border: 1px solid #4ca8e0;
        `;
      default:
        return;
    }
  }}
`;

export {Tag, TagComponent};
