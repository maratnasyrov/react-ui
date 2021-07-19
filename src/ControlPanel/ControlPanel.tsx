import React, { useCallback } from 'react';

import { Button, Dialog, Grid } from '../components';
import { useScreenSize } from '../hooks';

export type ControlPanelState = 'loading' | 'standby' | 'betting' | 'paytable';

export type ControlPanelProps = {
  state: ControlPanelState;
  actions: {
    bet: () => void;
    menu: () => void;
    standby: () => void;
  };
};

const ControlPanel: React.FC<ControlPanelProps> = ({ state, actions }) => {
  const { width, height } = useScreenSize();

  const handleBet = useCallback((): void => {
    if (state === 'betting') {
      actions.standby();
    } else {
      actions.bet();
    }
  }, [actions, state]);

  const handleMenu = useCallback((): void => {
    actions.menu();
  }, [actions]);

  const handleClose = useCallback((): void => {
    actions.standby();
  }, [actions]);

  return (
    <Grid
      width={`${width}px`}
      height={`${height}px`}
      className="interface-wrapper"
    >
      <Dialog open={state === 'paytable'}>
        <Grid className="interface-wrapper__paytable">PAYTABLE</Grid>
        <Button onClick={handleClose}>CLOSE</Button>
      </Dialog>
      <Grid className="interface-wrapper__start-action">
        <Button onClick={handleBet}>
          {state === 'betting' ? 'STOP' : 'BET'}
        </Button>
      </Grid>
      <Grid className="interface-wrapper__manage-action">
        <Button disabled={state === 'betting'} onClick={handleMenu}>
          MENU
        </Button>
      </Grid>
    </Grid>
  );
};

export default ControlPanel;
