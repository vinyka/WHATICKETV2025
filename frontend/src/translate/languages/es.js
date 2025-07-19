const messages = { 
  es: {
    translations: {
      signup: {
        title: "Regístrate",
        toasts: {
          success: "¡Usuario creado con éxito! Por favor, inicia sesión.",
          fail: "Error al crear usuario. Verifica los datos ingresados.",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Contraseña",
        },
        buttons: {
          submit: "Registrarse",
          login: "¿Ya tienes una cuenta? ¡Ingresa!",
        },
      },
      login: {
        title: "Iniciar sesión",
        form: {
          email: "Email",
          password: "Contraseña",
        },
        buttons: {
          submit: "Ingresar",
          register: "¡Regístrate ahora mismo!",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Agendamientos",
          enabled: "Habilitadas",
          disabled: "Deshabilitadas",
          clear: "Cancelar",
          delete: "Eliminar",
          save: "Guardar",
          yes: "Sí",
          no: "No",
          money: "$",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "¡Empresa creada con éxito!",
        },
      },
      auth: {
        toasts: {
          success: "¡Sesión iniciada con éxito!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Atenciones hoy: ",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "¡Conexión con WhatsApp eliminada con éxito!",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Confirmas? Deberás escanear el QR Code nuevamente.",
        },
        buttons: {
          add: "Agregar WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "QR CODE",
          newQr: "Nuevo QR CODE",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp",
            content:
              "Asegúrate de que tu celular tenga internet e inténtalo de nuevo, o solicita un nuevo QR Code",
          },
          qrcode: {
            title: "Esperando lectura del QR Code",
            content:
              "Haz clic en 'QR CODE' y escanéalo con tu celular para iniciar sesión",
          },
          connected: {
            title: "¡Conexión establecida!",
          },
          timeout: {
            title: "Se perdió la conexión con el celular",
            content:
              "Verifica que tu celular tenga internet y WhatsApp esté abierto, o haz clic en 'Desconectar' para obtener un nuevo QR Code",
          },
        },
        table: {
          name: "Nombre",
          number: "Número",
          status: "Estado",
          lastUpdate: "Última actualización",
          default: "Predeterminado",
          actions: "Acciones",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar WhatsApp",
          edit: "Editar WhatsApp",
        },    
        tabs: {
          general: "General",
          messages: "Mensajes",
          assessments: "Evaluaciones",
          integrations: "Integraciones",
          schedules: "Horario laboral",
        },
        form: {
          name: "Nombre",
          default: "Predeterminado",
          sendIdQueue: "Departamento",
          timeSendQueue: "Redirigir a Departamento en X minutos",
          queueRedirection: "Redirección de Departamento",
          outOfHoursMessage: "Mensaje fuera de horario",
          queueRedirectionDesc: "Selecciona un Departamento para redirigir contactos sin Departamento asignado",
          prompt: "Prompt",
          expiresTicket: "Cerrar chats después de X minutos",
          expiresInactiveMessage: "Mensaje de cierre por inactividad",
          greetingMessage: "Mensaje de bienvenida",
          complationMessage: "Mensaje de conclusión",
          sendIdQueue: "Departamento",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp guardado con éxito.",
      },
      qrCode: {
        message: "Escanee el QrCode para iniciar sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto eliminado con éxito!",
          deletedAll: "¡Todos los contactos eliminados con éxito!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteAllTitle: "Eliminar Todos",
          importTitle: "Importar contactos",
          deleteMessage: "¿Seguro que deseas eliminar este contacto? Se perderán todos los tickets relacionados.",
          deleteAllMessage: "¿Seguro que deseas eliminar todos los contactos? Se perderán todos los tickets relacionados.",
          importMessage: "¿Deseas importar todos los contactos del teléfono?",
        },
        confirmationModal:{
          importTitlte: "Importar contactos",
          importMessage: "Esta acción importará los contactos de la agenda de WhatsApp. Algunos modelos pueden no permitir esta función según tu configuración de privacidad. Verifica el resultado en 1 hora.",
          deleteTitle:"Eliminar",
          deleteMessage:"¿Seguro que deseas eliminar este contacto? Se perderán todos los atendimientos relacionados.",
        },
        buttons: {
          import: "Importar Contactos",
          importSheet: "Importar Excel",
          add: "Agregar Contacto",
          export: "Exportar Contactos",
          delete: "Eliminar Todos los Contactos"
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Acciones",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Agregar proyecto",
          edit: "Editar proyecto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          jsonContent: "JsonContent",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para expirar una conversa",
          typebotKeywordFinish: "Palabra para finalizar el ticket",
          typebotKeywordRestart: "Palabra para reiniciar el flujo",
          typebotRestartMessage: "Mensaje al reiniciar la conversación",
          typebotUnknownMessage: "Mensaje de opción inválida",
          typebotDelayMessage: "Intervalo (ms) entre mensajes",   
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          test: "Probar Bot",
        },
        messages: {
          testSuccess: "¡Integración probada con éxito!",
          addSuccess: "Integración agregada con éxito.",
          editSuccess: "Integración editada con éxito.",
        },
      },
    sideMenu: {
            name: "Menú Lateral Inicial",
            note: "Si está habilitado, el menú lateral iniciará cerrado",
            options: {
              enabled: "Abierto",
              disabled: "Cerrado",
            },
          },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de Tokens en la respuesta",
          temperature: "Temperatura",
          apikey: "API Key",
          max_messages: "Máximo de mensajes en el Historial",
          voiceKey: "Clave de API de Voz",
          voiceRegion: "Región de Voz",
        },
        success: "¡Prompt guardado con éxito!",
        title: {
          add: "Agregar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Sector/Departamento",
          max_tokens: "Máximo Tokens Respuesta",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir!",
        },
        buttons: {
          add: "Agregar Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Datos del contacto",
          extraInfo: "Información adicional",
          name: "Nombre",
          number: "Número de Whatsapp",
          email: "Email",
          extraName: "Nombre del campo",
          extraValue: "Valor",
          disableBot: "Deshabilitar chatbot",
          whatsapp: "Conexión Origen: "
        },
        buttons: {
          addExtraInfo: "Agregar información",
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado con éxito.",
      },
      queueModal: {
        title: {
          add: "Agregar Departamento",
          edit: "Editar Departamento",
        },
        toasts: {
          deleted: "Registro eliminado",
        },      
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de bienvenida",
          complationMessage: "Mensaje de conclusión",
          outOfHoursMessage: "Mensaje fuera de horario",
          ratingMessage: "Mensaje de evaluación",
          token: "Token",
          orderQueue: "Orden del Departamento (Bot)",
          integrationId: "Integración",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          attach: "Adjuntar Archivo",
        },
        serviceHours: {
          dayWeek: "Día de la semana",
          startTimeA: "Hora Inicial - 1",
          endTimeA: "Hora Final - 1",
          startTimeB: "Hora Inicial - 2",
          endTimeB: "Hora Final - 2",
          monday: "Lunes",
          tuesday: "Martes",
          wednesday: "Miércoles",
          thursday: "Jueves",
          friday: "Viernes",
          saturday: "Sábado",
          sunday: "Domingo",
        },
      },
      userModal: {
        title: {
          add: "Agregar usuario",
          edit: "Editar usuario",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Contraseña",
          profile: "Perfil",
          whatsapp: "Conexión Predeterminada",
          allTicket: "Ticket Sin Departamento [Invisible]",
          allTicketEnabled: "Habilitado",
          allTicketDesabled: "Deshabilitado",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado con éxito.",
      },
      scheduleModal: {
        title: {
          add: "Nuevo Agendamiento",
          edit: "Editar Agendamiento",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de Agendamiento",
          sentAt: "Fecha de Envío",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Agendamiento guardado con éxito.",
      },
      tagModal: {
        title: {
          add: "Nueva Etiqueta",
          edit: "Editar Etiqueta",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Etiqueta guardada con éxito.",
      },
      chat: {
        noTicketMessage: "Selecciona un ticket para comenzar a chatear.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRastra y suelta archivos en el campo de abajo",
          titleFileList: "Lista de archivo(s)"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
          closeallTicket: "Cerrar"
        },
      },
      ticketsQueueSelect: {
        placeholder: "Departamentos",
      },
      tickets: {
        inbox: {
          closedAllTickets: "¿Cerrar todos los tickets?",
          closedAll: "Cerrar Todos",
          newTicket: "Nuevo Ticket",
          yes: "SÍ",
          no: "NO",
          open: "Abiertos",
          resolverd: "Resueltos",
        },
        toasts: {
          deleted: "El atendimiento en el que estabas fue eliminado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Abiertas" },
          closed: { title: "Resueltos" },
          search: { title: "Búsqueda" },
        },
        search: {
          placeholder: "Buscar atendimiento y mensajes",
          filterConnections: "Filtro por conexiones",
          filterContacts: "Filtro por contacto",
          filterConections: "Filtro por Conexión",
          filterConectionsOptions: {
            open: "Abierto",
            closed: "Cerrado",
            pending: "Pendiente",
          },
          filterUsers: "Filtro por Usuarios",
          ticketsPerPage: "Tickets por página"
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escriba para buscar usuarios",
        fieldQueueLabel: "Transferir a Departamento",
        fieldQueuePlaceholder: "Seleccione un Departamento",
        noOptions: "Ningún usuario encontrado con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "En espera",
        assignedHeader: "En atención",
        noTicketsTitle: "¡Nada aquí!",
        noTicketsMessage:
          "Ningún atendimiento encontrado con ese estado o término buscado",
        buttons: {
          accept: "Aceptar",
          closed: "Finalizar",
          transfer: "Transferir",
          reopen: "Reabrir",
          exportAsPDF: "Exportar en PDF"
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escriba para buscar el contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Panel",
          connections: "QRConnect",
          tickets: "Chats",
          quickMessages: "Respuestas Rápidas",
          contacts: "Contactos",
          queues: "Departamentos",
          tags: "Etiquetas",
          administration: "Administración",
          users: "Usuarios",
          settings: "Configuraciones",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Agendamientos",
          campaigns: "Campañas",
          annoucements: "Informativos",
          logplw: "Actualizaciones",
          chats: "Chat Interno",
          financeiro: "Financiero",
          files: "Lista de archivos",
          prompts: "Open.AI",
          reports: "Reportes",
          queueIntegration: "Integraciones",
        },
        connections: {
  title: "Multicanal"
},
        appBar: {
          notRegister: "Sin notificaciones",
          user: {
            profile: "Perfil",
            logout: "Salir",
          },
        },
      },
      queueIntegration: {
        title: "Integraciones",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          lastUpdate: "Última actualización",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar Proyecto",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! y será eliminada de los departamentos y conexiones vinculadas",
        },
      },
      reports: {
        title: "Reportes de Atendimientos",
        table: {
          id: "Ticket",
          user: "Usuario",
          dateOpen: "Fecha Apertura",
          dateClose: "Fecha Cierre",
          NPS: "NPS",
          status: "Estado",
          whatsapp: "Conexión",
          queue: "Departamento",
          actions: "Acciones",
          lastMessage: "Últ. Mensaje",
          contact: "Cliente",
          supportTime: "Tiempo de Atención"
        },
        buttons: {
          filter: "Aplicar Filtro",
        },
        searchPlaceholder: "Buscar...",
      },    
      files: {
        title: "Lista de archivos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acción",
        },
        toasts: {
          deleted: "¡Lista eliminada con éxito!",
          deletedAll: "¡Todas las listas fueron eliminadas con éxito!",
        },
        buttons: {
          add: "Agregar",
          deleteAll: "Eliminar Todos",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteAllTitle: "Eliminar Todos",
          deleteMessage: "¿Seguro que deseas eliminar esta lista?",
          deleteAllMessage: "¿Seguro que deseas eliminar todas las listas?",
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token registrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre del archivo",
          media: "Archivo",
          token: "Token registrado",
        },
      },
      notifications: {
        noTickets: "Ninguna notificación.",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        searchPlaceholder: "Buscar...",
        noAttachment: "Sin adjunto",
        confirmationModal: {
          deleteTitle: "Eliminación",
          deleteMessage: "¡Esta acción es irreversible! ¿Desea continuar?",
        },
        buttons: {
          add: "Agregar",
          attach: "Adjuntar Archivo",
          cancel: "Cancelar",
          edit: "Editar",
        },
        toasts: {
          success: "¡Acceso directo agregado con éxito!",
          deleted: "¡Acceso directo eliminado con éxito!",
        },
        dialog: {
          title: "Mensaje Rápido",
          shortcode: "Acceso directo",
          message: "Respuesta",
          save: "Guardar",
          cancel: "Cancelar",
          geral: "Permitir editar",
          add: "Agregar",
          edit: "Editar",
          visao: "Permitir vista",
          geral: 'Global',
        },
        table: {
          shortcode: "Acceso directo",
          message: "Mensaje",
          actions: "Acciones",
          mediaName: "Nombre del Archivo",
          status: 'Global',
        },
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
          contactFirstName: "Primer Nombre",
          contactName: "Nombre",
          greeting: "Saludo",
          protocolNumber: "Protocolo",
          date: "Fecha",
          hour: "Hora",
        },
      },
      contactLists: {
        title: "Listas de Contactos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Lista",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "WhatsApp",
          email: "Email",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
          importMessage: "¿Desea importar los contactos de esta hoja de cálculo?",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Listas de Contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Lista de Contactos",
          status: "Estado",
          scheduledAt: "Programación",
          completedAt: "Finalizada",
          confirmation: "Confirmación",
          actions: "Acciones",
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "Solo Visualización",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de Confirmación 1",
            confirmationMessage2: "Mensaje de Confirmación 2",
            confirmationMessage3: "Mensaje de Confirmación 3",
            confirmationMessage4: "Mensaje de Confirmación 4",
            confirmationMessage5: "Mensaje de Confirmación 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexión",
            status: "Estado",
            scheduledAt: "Programación",
            confirmation: "Confirmación",
            contactList: "Lista de Contactos",
            tagList: "Lista de Etiquetas",
            fileList: "Lista de Archivos"
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Envíos",
            restart: "Reiniciar Envíos",
            close: "Cerrar",
            attach: "Adjuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro eliminado",
        },
      },
      announcements: {
        active: 'Activo',
        inactive: 'Inactivo',
        title: "Informativos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo Informativo",
          contactLists: "Listas de Informativos",
        },
        table: {
          priority: "Prioridad",
          title: "Título",
          text: "Texto",
          mediaName: "Archivo",
          status: "Estado",
          actions: "Acciones",
        },
        dialog: {
          edit: "Edición de Informativo",
          add: "Nuevo Informativo",
          update: "Editar Informativo",
          readonly: "Solo Visualización",
          form: {
            priority: "Prioridad",
            title: "Título",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Estado",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Adjuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          deleted: "Registro eliminado",
        },
      },
      campaignsConfig: {
        title: "Configuraciones de Campañas",
      },
      queues: {
        title: "Departamentos",
        table: {
          id:"ID",
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de bienvenida",
          actions: "Acciones",
          orderQueue: "Orden del Departamento (bot)",
        },
        buttons: {
          add: "Agregar Departamento",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Los atendimientos de este Departamento seguirán existiendo, pero no tendrán ningún Departamento asignado.",
        },
      },
      queueSelect: {
        inputLabel: "Departamentos",
      },
      users: {
        title: "Usuarios",
        table: {
          id: "ID",
          name: "Nombre",
          status: "Estado",
          email: "Email",
          profile: "Perfil",
          actions: "Acciones",
        },
        status: {
          online: "Usuarios en línea",
          offline: "Usuarios desconectados",
        },
        buttons: {
          add: "Agregar usuario",
        },
        toasts: {
          deleted: "Usuario eliminado con éxito.",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "Se perderán todos los datos del usuario. Los atendimientos abiertos de este usuario serán movidos al Departamento.",
        },
      },
      helps: {
        title: "Centro de Ayuda",
      },
      schedules: {
        title: "Agendamientos",
        confirmationModal: {
          deleteTitle: "¿Seguro que deseas eliminar este Agendamiento?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha de Agendamiento",
          sentAt: "Fecha de Envío",
          status: "Estado",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Agendamiento",
        },
        toasts: {
          deleted: "Agendamiento eliminado con éxito.",
        },
      },
      tags: {
        title: "Etiquetas",
        confirmationModal: {
          deleteTitle: "¿Seguro que deseas eliminar esta Etiqueta?",
          deleteMessage: "Esta acción no se puede revertir.",
          deleteAllMessage: "¿Seguro que deseas eliminar todas las Etiquetas?",
          deleteAllTitle: "Eliminar Todas",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Registros Etiquetados",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Etiqueta",
          deleteAll: "Eliminar Todas",
        },
        toasts: {
          deletedAll: "¡Todas las etiquetas eliminadas con éxito!",
          deleted: "Etiqueta eliminada con éxito.",
        },
      },
      settings: {
        success: "Configuraciones guardadas con éxito.",
        title: "Configuraciones",
        settings: {
          userCreation: {
            name: "Creación de usuario",
            options: {
              enabled: "Activado",
              disabled: "Desactivado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          buttons: {
            return: "Volver",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escribe un mensaje",
        placeholderClosed:
          "Reabre o acepta este ticket para enviar un mensaje.",
        signMessage: "Firmar",
      },
      contactDrawer: {
        header: "Datos del contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otra información",
      },
      fileModal: {
        title: {
          add: "Agregar lista de archivos",
          edit: "Editar lista de archivos",
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Agregar archivo",
        },
        form: {
          name: "Nombre de la lista de archivos",
          message: "Detalles de la lista",
          fileOptions: "Lista de archivos",
          extraName: "Mensaje para enviar con archivo",
          extraValue: "Valor de la opción",
        },
        success: "¡Lista de archivos guardada con éxito!",
      },
      ticketOptionsMenu: {
        schedule: "Agendamiento",
        delete: "Eliminar",
        transfer: "Transferir",
        registerAppointment: "Observaciones del Contacto",
        appointmentsModal: {
          title: "Observaciones del Contacto",
          textarea: "Observación",
          placeholder: "Ingrese aquí la información que desea registrar",
        },
        confirmationModal: {
          title: "Eliminar el ticket",
          titleFrom: "del contacto ",
          message:
            "¡Atención! Todos los mensajes relacionados al ticket se perderán.",
        },
        buttons: {
          delete: "Eliminar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Eliminar",
        reactionSuccess: "Reacción añadida",
        reply: "Responder",
        edit: "Editar Mensaje",
        forward: "Reenviar",
        toForward: "Reenviar",
        react: "Reaccionar",
        confirmationModal: {
          title: "¿Eliminar mensaje?",
          message: "Esta acción no se puede revertir.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no se ha inicializado. Verifique la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pudo descargar multimedia de WhatsApp. Verifique la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Por favor, intente nuevamente.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar mensaje de WhatsApp. Verifique la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya existe un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión expirada. Por favor ingrese.",
        ERR_USER_CREATION_DISABLED:
          "La creación de usuarios ha sido deshabilitada por el administrador.",
        ERR_NO_PERMISSION: "No tiene permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró contacto con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontró ticket con este ID.",
        ERR_NO_USER_FOUND: "No se encontró usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al buscar el mensaje en WhatsApp, quizás es demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elija otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de bienvenida es obligatorio cuando hay más de un Departamento.",
        ERR_CHECK_NUMBER: "Número inválido. Verifique el número e intente nuevamente.",
      },
    },
  },
};

export { messages };
