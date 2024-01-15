import React from 'react';

const RemoteOrderApp = React.lazy(() => import('order/OrderApp'));
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
