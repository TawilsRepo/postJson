import localStorage from './api/localStorage';
import utilities from './api/utilities';
import constants from './constants.json';
import domChange from './api/domChange';

export default {
    sendRequest: (state, type, url, dataType, headers, data) => {
        // if(!$('#loader').hasClass('d-none'))
        // return false;
        // $.ajax({
        //     type: type,
        //     url: url,
        //     datatype: dataType,
        //     data:data,
        //     crossDomain: true,
        //     beforeSend: function setHeader(httpReq) {
        //         $('#loader').removeClass('d-none');
        //         $.each(headers, function( key, value ) {
        //             httpReq.setRequestHeader(key, value);
        //         });
        //     },
        //     success: function (response, status, xhr) {

        //     },
        //     error: function (response, textstatus) {

        //     },
        //     timeout: 1000 * 60 * 3, // sets timeout to 3 minutes
        //     statusCode: {
        //         200: function () {
        //         },
        //         400: function () {
        //         },
        //         401: function () {
        //         },
        //         403: function () {
        //         },
        //         404: function () {
        //         },
        //         500: function () {
        //         }
        //     }
        // }).done(function(){
        //     $('#loader').addClass('d-none');
        // });
    }
}