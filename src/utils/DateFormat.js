import moment from 'moment';


export const dateFormat   = (date) => {
    return moment(date).format('DD/MM/YYYY')
}
// export const timeFormat   = (time) => {
//     return moment(time).format(' HH:mm')
// }