import React from 'react';
import ReactDOM from 'react-dom';
import {DeleteModal} from 'pimui/js/attribute/form/delete/DeleteModal';
import {ThemeProvider} from 'styled-components';
import {pimTheme} from 'akeneo-design-system';
import {DependenciesProvider} from '@akeneo-pim-community/legacy-bridge';

const DeleteAction = require('oro/datagrid/delete-action');
const mediator = require('oro/mediator');

class DeleteAttributeAction extends DeleteAction {
  execute() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const handleClose = () => {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
    };

    const handleSuccess = () => {
      mediator.trigger('grid_action_execute:product-grid:delete');
      mediator.trigger('datagrid:doRefresh:' + this.datagrid.name);

      handleClose();
    };

    ReactDOM.render(
      <DependenciesProvider>
        <ThemeProvider theme={pimTheme}>
          <DeleteModal onCancel={handleClose} onSuccess={handleSuccess} deleteUrl={this.model.attributes.delete_link} />
        </ThemeProvider>
      </DependenciesProvider>,
      container
    );
  }
}

export = DeleteAttributeAction;
