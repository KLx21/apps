import React from 'react';

// @ts-ignore
const RemoteOrderApp = React.lazy(() => import('order/OrderApp'));
// @ts-ignore
const RemoteDeliveryApp = React.lazy(() => import('delivery/DeliveryApp'));

export default (): React.ReactElement => {
  return (
    <div style={{ display: 'grid', gridAutoColumns: 'auto' }}>
      <>
        <RemoteOrderApp />
      </>
      <>
        <RemoteDeliveryApp />
      </>
    </div>
  );
};
