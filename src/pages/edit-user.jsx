import { Helmet } from 'react-helmet-async';

import { EditView } from 'src/sections/user/edit';

// ----------------------------------------------------------------------

export default function EditUser() {
  return (
    <>
      <Helmet>
        <title> Edit Form </title>
      </Helmet>
      <EditView />
    </>
  );
}
