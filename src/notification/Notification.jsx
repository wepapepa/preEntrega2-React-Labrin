const Notification = ({ notificacionData }) => {
    const colors = {
        success: 'lilac',
        error: 'red',
        warning: 'yellow',
        info: 'pink'
    }

    const title = {
        success: 'Logrado',
        error: '¡Error! :(',
        warning: 'Cuidado',
        info: 'Información'
    }

    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 30,
        backgroundColor: colors[notificacionData.type],
        color: 'white',
        padding: 20,
        borderRadius: 10
    }

    return (
        <article style={notificationStyle}>
            <h3>{ title[notificacionData.type] }</h3>
            { notificacionData.text }
        </article>
    )
}

export default Notification