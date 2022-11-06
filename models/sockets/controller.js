

const socketController = (socket)=>{
    console.log('cliente conectado', socket.id);

    socket.on('disconnect', ()=>{
        console.log('cliente desconectado', socket.id)
    })

    // escuchar desde el servidor
    socket.on('enviar-mensaje', (payload, callback)=>{
        console.log(payload)

        //enviar desde el servidor al cliente
        // this.io.emit('enviar-mensaje', payload);
        socket.broadcast.emit('enviar-mensaje', payload);

        //Ejecutando el callback (tercer argumento enviado desde el cliente)
        const id = 12323
        callback(id);
    })
};


export{socketController}