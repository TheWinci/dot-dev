import React, { Fragment, PropsWithChildren } from 'react'

function Show({ if: show, children }: PropsWithChildren<{ if: boolean }>) {
  if (!Boolean(show)) {
    return null;
  }

  return (
    <Fragment>{children}</Fragment>
  )
}

export default Show