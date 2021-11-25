import * as React from 'react'

const RQDevtools = React.lazy(() => import(/* webpackChunkName: "devtools" */ './RQDevtools'))

export const Devtools = () => {
    const [showDevtools, toggleDevtools] = React.useReducer((old) => !old, false)

    React.useEffect(() => {
        if (!window.toggleDevtools) {
            window.toggleDevtools = toggleDevtools
        }
    }, [])

    return (
        <React.Suspense fallback={null}>
            {process.env.NODE_ENV !== 'production' && <RQDevtools />}
            {showDevtools ? <RQDevtools position="bottom-right" /> : null}
        </React.Suspense>
    )
}
