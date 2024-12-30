import Swal from 'sweetalert2';

export const showSwal = (title, icon, text) => {
    Swal.fire({
        position: 'top-end',
        title: title,
        text: text,
        icon: icon,
        showConfirmButton: false,
        timer: 2500,
        background: '#fff',
        color: '#000',
    });
};