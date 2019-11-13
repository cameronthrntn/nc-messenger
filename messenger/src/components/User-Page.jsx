import React from 'react';
import UserUsernameForm from './User-Username-Form'
import UserAvatarForm from './User-Avatar-Form'

export default function UserPage({ user_id }) {
  return (
    <>
      <UserUsernameForm user_id={user_id} type='username'/>
      <UserUsernameForm user_id={user_id} type='avatar'/>
      {/* <UserAvatarForm user_id={user_id} /> */}
    </>
  );
}
