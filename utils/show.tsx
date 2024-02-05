import React, { Fragment, PropsWithChildren } from 'react'

function Show({ if: show, children, ...props }: PropsWithChildren<{ if: boolean } & React.HTMLAttributes<HTMLDivElement>>) {
  if (!Boolean(show)) {
    return null;
  }

  return (
    <Fragment>{children}</Fragment>
  )
}

export default Show