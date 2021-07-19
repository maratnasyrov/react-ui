import React, { useState } from 'react';
import ControlPanel, { ControlPanelState } from '../ControlPanel';

export const UI: React.FC = () => {
  const [state, setState] = useState<ControlPanelState>('standby');

  const actions = {
    bet: () => {
      console.log('betting');
      setState('betting');
    },
    menu: () => {
      console.log('paytable');
      setState('paytable');
    },
    standby: () => {
      console.log('standby');
      setState('standby');
    },
  };

  return <ControlPanel state={state} actions={actions} />;
};

export default UI;
