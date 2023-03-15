var timeoutSignature = '0';
var id_member = '6525';
var kode_lokasi = '4121303';
//var APIBelanja = "https://www.tokoperhutani.com/filter/valSubmit";
var APIBelanja = "https://eoqc0wqfm9sjc6y.m.pipedream.net";

function modalSusspend(title) {
    $('#modal_form').modal('show');
    $('.notify').text(title); // Set title to Bootstrap modal title
}

$("#clickRefresh").on("click", function() {

    $.ajax({
        type: "get",
        url: "https://www.tokoperhutani.com/filter/refresh",
        cache: false,
        data: {
            id_member: id_member,
            kode_lokasi: kode_lokasi,
            POTPtokenCode: $("#crsf_body").val()
        },
        //dataType: "json",
        async: false,
        success: function(result) {
            window.location.href = 'https://www.tokoperhutani.com/';
        }
    });
});

$("#clickRefreshSignature").on("click", function() {

    window.location.href = 'https://www.tokoperhutani.com/beranda';

});

function reftos() {
    var inputElements = document.getElementsByTagName('id[]');
    alert(inputElements);
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].type == 'text') {
            inputElements[i].value = '';
            alert(123);
        }
    }
}

function updateDataTableSelectAllCtrl(table) {
    var $table = table.table().node();
    var $chkbox_all = $('tbody input[type="checkbox"]', $table);
    var $chkbox_checked = $('tbody input[type="checkbox"]:checked', $table);
    //var chkbox_select_all  = $('thead input[type="checkbox"]:checked', $table);
    var chkbox_select_all = $('thead input[name="select_all"]', $table).get(0);

    // If none of the checkboxes are checked
    if ($chkbox_checked.length === 0) {
        chkbox_select_all.checked = false;
        if ('indeterminate' in chkbox_select_all) {
            chkbox_select_all.indeterminate = false;
        }

        // If all of the checkboxes are checked
    } else if ($chkbox_checked.length === $chkbox_all.length) {
        chkbox_select_all.checked = true;
        if ('indeterminate' in chkbox_select_all) {
            chkbox_select_all.indeterminate = false;
        }

        // If some of the checkboxes are checked
    } else {
        chkbox_select_all.checked = true;
        if ('indeterminate' in chkbox_select_all) {
            chkbox_select_all.indeterminate = true;
        }
    }
}


$(document).ready(function() {
    console.log(4120100);
    console.log(4121300);
    console.log(4121303);
    console.log('010/semua-mutu/semua-sortimen/semua-jenis-tebangan/semua-status/semua-cacat-kayu');

    if (timeoutSignature > 60) {
        $('#notifyTimeoutSignature').modal('show');
    }

    setInterval(function() {
        $('#notifyTimeout').modal('show');
    }, 3600000);

    $.ajax({
        type: "GET",
        url: "https://www.tokoperhutani.com/filter/jsonProduct/79704266434e456e75754151452b34667275634f47743837373035337433595a3842574f54443434634649525176794a7477424751325a374e7233384c70514b697343485a785a4c433135694d4f4974774676413871784a77614a68344141496f63533459716b65387a4d756b3535755230415973732b726d7252593530457665535a52426b6b7063795958384b4b437658553844513d3d",
        cache: false,
        dataType: "json",
        success: function(result) {
            console.log(result);

        }
    });

    // Array holding selected row IDs
    //                'url'   : 'https://www.tokoperhutani.com/filter/jsonProduct/;
    //'url'   : 'https://www.tokoperhutani.com/filter/jsonProduct/4120100/4121300/4121303/010/semua-mutu/semua-sortimen/semua-jenis-tebangan/semua-status/semua-cacat-kayu',
    var rows_selected = [];
    var table = $('#example').DataTable({
        'ajax': {
            'url': 'https://www.tokoperhutani.com/filter/jsonProduct/79704266434e456e75754151452b34667275634f47743837373035337433595a3842574f54443434634649525176794a7477424751325a374e7233384c70514b697343485a785a4c433135694d4f4974774676413871784a77614a68344141496f63533459716b65387a4d756b3535755230415973732b726d7252593530457665535a52426b6b7063795958384b4b437658553844513d3d',
            'type': 'GET'
        },
        'scrollX': true,
        'columnDefs': [{
            'targets': 0,
            'searchable': false,
            'orderable': false,
            'className': 'dt-body-center',
            'render': function(data, type, row) {
                var ketersediaan = row[1];
                if (ketersediaan == 1) {
                    return '<input type="checkbox" disabled>';
                }
                if (ketersediaan == 88) {
                    return '<input type="checkbox" disabled>';
                }
                if (ketersediaan == 0) {
                    return '<input type="checkbox">';
                }
            }
        }, {
            'targets': 1,
            'className': 'dt-body-center',
            'render': function(data, type, row) {
                var ketersediaan = row[1];
                var thn_kapling = row[20];
                if (ketersediaan == 1) {
                    return '<span style="background:red; padding: 5px 10px; color:white; border-radius:4px">Dipesan</span>';
                }
                if (ketersediaan == 88) {
                    return '<span style="background:grey; padding: 5px 10px; color:white; border-radius:4px">Ditarik</span>';
                }

                if (ketersediaan == 0) {
                    if (thn_kapling == '2023') {
                        return '<span style="background:#e39724; padding: 5px 10px; color:white;  border-radius:4px">Tersedia</span>';
                    }
                    if (thn_kapling == '2022') {
                        return '<span style="background:#1f9fb5; padding: 5px 10px; color:white;  border-radius:4px">Tersedia</span>';
                    }
                    if (thn_kapling == '2021') {
                        return '<span style="background:#e0e34f; padding: 5px 10px; color:white;  border-radius:4px">Tersedia</span>';
                    }
                    if (thn_kapling == '2020') {
                        return '<span style="background:#a232a8; padding: 5px 10px; color:white;  border-radius:4px">Tersedia</span>';
                    }
                    if (thn_kapling == '2019') {
                        return '<span style="background:#00713D; padding: 5px 10px; color:white;  border-radius:4px">Tersedia</span>';
                    }
                    if (thn_kapling == '2018') {
                        return '<span style="background:orange; padding: 5px 10px; color:white;  border-radius:4px">Tersedia</span>';
                    }
                    if (thn_kapling == '2017') {
                        return '<span style="background:blue; padding: 5px 10px; color:white;  border-radius:4px">Tersedia</span>';
                    } else {
                        return '<span style="background:green; padding: 5px 10px; color:white;  border-radius:4px">Tersedia</span>';
                    }
                }

            }
        }, {
            'targets': 3,
            'className': 'dt-body-right',
            'render': function(data, type, row) {
                return '<div style="width: 100px">' + row[3] + '</div>';
            }
        }, {
            'targets': 2,
            'className': 'dt-body-center',
            'render': function(data, type, row) {
                return '<a href="https://www.tokoperhutani.com/produk/etalase/' + row[2] + '/4121303">' + row[2] + '</a>';
            }
        }],
        'order': [2, 'asc'],
        'rowCallback': function(row, data, dataIndex) {
            // Get row ID
            var rowId = data[0];
            var ketersediaan = data[1];
            // If row ID is in the list of selected row IDs
            if ($.inArray(rowId, rows_selected) !== -1) {
                if (ketersediaan == 1) {
                    $(row).find('input[type="checkbox"]').prop('checked', true);
                    $(row).addClass('selected');
                }
            }
        }
    });


    // Handle click on checkbox
    $('#example tbody').on('click', 'input[type="checkbox"]', function(e) {
        var $row = $(this).closest('tr');

        // Get row data
        var data = table.row($row).data();

        // Get row ID
        var rowId = data[0];

        // Determine whether row ID is in the list of selected row IDs
        var index = $.inArray(rowId, rows_selected);

        // If checkbox is checked and row ID is not in list of selected row IDs
        if (this.checked && index === -1) {
            rows_selected.push(rowId);

            // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
        } else if (!this.checked && index !== -1) {
            rows_selected.splice(index, 1);
        }

        if (this.checked) {
            $row.addClass('selected');
        } else {
            $row.removeClass('selected');
        }

        // Update state of "Select all" control
        updateDataTableSelectAllCtrl(table);

        // Prevent click event from propagating to parent
        e.stopPropagation();
        // reload
    });

    // Handle click on table cells with checkboxes
    $('#example').on('click', 'tbody td, thead th:first-child', function(e) {
        $(this).parent().find('input[type="checkbox"]').trigger('click');
    });

    // Handle click on "Select all" control
    $('thead input[name="select_all"]', table.table().container()).on('click', function(e) {
        if (this.checked) {
            $('#example tbody input[type="checkbox"]:not(:checked)').trigger('click');
        } else {
            $('#example tbody input[type="checkbox"]:checked').trigger('click');
        }

        // Prevent click event from propagating to parent
        e.stopPropagation();
    });

    // Handle table draw event
    table.on('draw', function() {
        // Update state of "Select all" control
        updateDataTableSelectAllCtrl(table);
    });

    function bin2hex(s) {
        var v, i, f = 0,
            a = [];
        s += '';
        f = s.length;

        for (i = 0; i < f; i++) {
            a[i] = s.charCodeAt(i).toString(16).replace(/^([\da-f])$/, "0$1");
        }

        return a.join('');
    }

    function aesEncrypt(data) {
        const key = '1nf0m3di@j4y4l4h1nfom3dias3l4m4n'
        const iv = '9532654BD7815470'

        const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(iv), // parse the IV
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        })
        return cipher.toString()
    }

    // Handle form submission event
    $('#frm-example').on('submit', function(e) {
        var form = this;

        var element = document.getElementById('id[]');
        if (element != null) {
            element.parentNode.removeChild(element);
        }

        // Iterate over all selected checkboxes
        $.each(rows_selected, function(index, rowId) {
            // Create a hidden element
            $(form).append(
                $('<input>')
                .attr('type', 'text')
                .attr('name', 'id[]')
                .val(rowId)
            );
        });

        // FOR DEMONSTRATION ONLY
        var csrfName = 'POTPtokenCode';
        var csrfvalue = 'd41b00d3030fb86f29b09f659cb6839a';

        var valSubmit = $(form).serialize() + '&' + 'cart' + '=' + 'cart2';

        var encrypted_data = bin2hex(aesEncrypt(valSubmit));

        $('#notifyLoading').modal('show');
        $.ajax({
            type: "post",
            url: APIBelanja,
            cache: false,
            data: {encrypted_data: encrypted_data, POTPtokenCode: csrfvalue},
            dataType: "json",
            async: false,
            success: function(result) {
                $('#notifyLoading').modal('hide');

                table.ajax.reload(null, false); // user paging is not reset on reload

                var gm = '';
                gm += '   <select  class="le-input" id="wilayah" name="wilayah" style="margin-top: 0px;">';
                gm += '       <option value="' + result.kodeGm + '">' + result.namaGm + '</option>';
                gm += '   </select>';
                $('#gm').html(gm);

                var manager = '';
                manager += '   <select class="le-input" name="kota">';
                manager += '       <option value="' + result.kodeManager + '">' + result.namaManager + '</option>';
                manager += '   </select>';
                $('#manager').html(manager);

                var tpk = '';
                tpk += '   <select class="le-input" id="type_pembeli" name="tpk">';
                tpk += '       <option value="' + result.kodeTpk + '">' + result.namaTpk + '</option>';
                tpk += '   </select>';
                $('#tpk').html(tpk);

                var kayu = '';
                kayu += '   <select class="le-input" name="jenis_kayu" style="margin-top: 4px;">';
                kayu += '       <option value="' + result.kodekayu + '">' + result.namaKayu + '</option>';
                kayu += '   </select>';
                $('#kayu').html(kayu);

                $('#countTrolley').html(result.count);

                listTrolley(result.dataTrolley);

                if (result.statusTrolley == 'success') {
                    //$('body').css('overflow', 'hidden');
                    $('#listTrolley').modal('show');
                }
                if (result.statusTrolley == 'failed') {
                    $('.textNotifyTrolley').html('Anda hanya bisa memesan di satu TPK dan Kayu yang sama, yaitu di ' + result.namaTpk + ' dan ' + result.namaKayu + '');
                    $('#notifyTrolley').modal('show');
                }
                $('#csrf').val(result.POTPtokenCode);
            }
        });


        // Remove added elements
        $('input[name="id\[\]"]', form).remove();

        // Prevent actual form submission
        e.preventDefault();
    });

});

function listTrolley(result) {
    var TotalVolume = 0;
    var TotalHarga = 0;
    var TotalKapling = 0;
    var listTrolley = '';

    listTrolley += ' <section id="cart-page">';
    listTrolley += '     <div class="row" style="display:block;overflow-y:auto;height:400px;">';
    listTrolley += '         <div class="col-xs-12 col-md-12 items-holder no-margin" style="padding-left: 15px; padding-right: 15px;">';
    listTrolley += '             <hr style="margin-bottom:0px">';
    listTrolley += '             <table class="table" cellspacing="0" width="100%" >';
    listTrolley += '             <thead class="text-main">';
    listTrolley += '                 <tr>';
    //listTrolley    += '                     <th style="padding: 8px">No.</th>';
    listTrolley += '                     <th>No. Kapling</th>';
    listTrolley += '                     <th>Nama TPK</th>';
    listTrolley += '                     <th>Jenis Kayu</th>';
    listTrolley += '                     <th>Volume</th>';
    listTrolley += '                     <th>Jumlah</th>';
    listTrolley += '                     <th>Harga</th>';
    listTrolley += '                     <th></th>';
    listTrolley += '                 </tr>';
    listTrolley += '             </thead>';

    listTrolley += '             <tbody>';


    for (var s in result) {

        listTrolley += '                 <tr class="list_' + result[s].id + '">';
        //listTrolley    += '                     <td style="padding: 8px">No.</td>';
        listTrolley += '                     <td class="mr-2">' + result[s].noKapling + '</td>';
        listTrolley += '                     <td class="mr-2">' + result[s].namaTpk + '</td>';
        listTrolley += '                     <td class="mr-2">' + result[s].jenisKayu + '</td>';
        listTrolley += '                     <td class="mr-2">' + parseFloat(result[s].volume).toFixed(4) + '</td>';
        listTrolley += '                     <td class="mr-2" style="text-align:center">' + parseFloat(result[s].jumlah).toFixed(0) + '</td>';
        listTrolley += '                     <td class="mr-2">Rp <span class="pull-right">' + result[s].harga + '</span></td>';
        listTrolley += '                     <td align="center">&nbsp;&nbsp;<a href="#"  onclick="deleteTrolley(\'' + result[s].id + '\')" class="trash" ><i style="color: red" class="fa fa-trash-o"></i></a></td>';
        listTrolley += '                 </tr>';

        //volumeTotals = floor(result[s].volume);
        //HargaTotals	= result[s].harga + 1 -1;
        //KaplingTotals	= result[s].jumlah +1 -1;

        TotalVolume = TotalVolume + parseFloat(result[s].volume);
        var hargaKapling = (result[s].harga).split(',');
        var hargaKpaling2 = hargaKapling.join('');
        TotalHarga = TotalHarga + Number(hargaKpaling2);
        var TotalHargaRp = TotalHarga.toLocaleString('en');
        TotalKapling = TotalKapling + Number(result[s].jumlah);
    }
    listTrolley += '             </tbody>';

    //totalCartCounter();
    //$('#refreshedContent').html(TotalVolume);
    listTrolley += '             <div id="cntn"><tr><td colspan="3" class="font-weight-bold text-center">Total</td><td>' + parseFloat(TotalVolume).toFixed(4) + '</td><td style="text-align:center">' + TotalKapling + '</td><td>Rp <span class="pull-right">' + TotalHargaRp + '</span></td><td></td></tr></div>';
    //listTrolley    += '             <div><span id="refreshedContent"></span></div>';
    listTrolley += '             </table>';
    listTrolley += ' <div style="border: 1px solid #ccc; padding: 10px; margin-top: 30px"><h4>Ketentuan Booking</h4>';
    listTrolley += ' <ol style="text-align:left">';
    listTrolley += '<li>Pembayaran harus dilakukan sebelum pukul 23.00 WIB jika melebihi batas waktu tersebut maka pemesanan akan dibatalkan</li>';
    listTrolley += '<li>Pemesanan bisa dilakukan kembali besok setelah pukul 08.00 WIB</li>';
    listTrolley += '<li>Pemesanan hanya bisa di lakukan pada satu TPK yang sama</li>';
    listTrolley += '<li>Anda harus menyelesaikan proses belanja anda 1 jam terhitung sejak anda pertama kali mengisi keranjang belanja. jika tidak maka sistem akan mengosongkan keranjang belanja anda, dan anda akan dikenakan sangsi pemblokiran akun</li>';
    listTrolley += '</ol></div>';




    listTrolley += '         </div>';
    listTrolley += '     </div>';
    listTrolley += ' </section>';


    console.log(listTrolley);

    $('.liveTrolley').html(listTrolley);

    $('#content-keranjang').html(listTrolley);
}

$('#listTrolley').on('hidden.bs.modal', function() {
    location.reload();
})


$("#wilayah").change(function() {
    var dt = {
        wilayah: $("#wilayah").val(),
        POTPtokenCode: 'd41b00d3030fb86f29b09f659cb6839a'
    }
    $.ajax({
        type: "POST",
        url: "https://www.tokoperhutani.com/beranda/select_kota",
        data: dt,
        success: function(msg) {
            var data = JSON.parse(msg);
            $("#select_kota").html(data.combo);

        }
    })
});

$("#select_kota").change(function() {
    var dt = {
        kota: $("#kota").val(),
        POTPtokenCode: 'd41b00d3030fb86f29b09f659cb6839a'
    }
    $.ajax({
        type: "POST",
        url: "https://www.tokoperhutani.com/beranda/select_tpk",
        data: dt,
        success: function(msg) {
            var data = JSON.parse(msg);
            $("#select_tpk").html(data.combo);

        }
    })
});

function deleteTrolley(str) {
    var id = str;
    var token = $('#csrf').val()
    $.ajax({
        type: 'POST',
        url: 'https://www.tokoperhutani.com/filter/deleteTrolley',
        data: {
            id: id,
            POTPtokenCode: token
        },
        dataType: "json",
        success: function(result) {
            //$('#countTrolley').html(result);

            //$("tr.list_"+id+"").remove();
            //$("#example").DataTable().ajax.reload(null, false );
            listTrolley(result.dataTrolley);
            $('#csrf').val(result.POTPtokenCode)
            $("#crsf_body").val();
            //table.ajax.reload(null, false);
            //if(result ==0){
            //location.reload();
            //}
        }
    })
}

function totalCartCounter(count) {
    var TotalVolume2 = 0;
    var TotalHarga2 = 0;
    var TotalKapling2 = 0;
    for (var f in count) {
        TotalVolume2 += parseFloat(count[f].volume);
        var hargaKaplings = (count[f].harga).split(',');
        var hargaKpaling2 = hargaKaplings.join('');
        TotalHarga2 = TotalHarga2 + Number(hargaKpaling2);
        var TotalHargaRps = TotalHarga2.toLocaleString('en');
        TotalKapling2 = TotalKapling2 + Number(count[f].jumlah);
    }
    return TotalVolume2, TotalHargaRps, TotalKapling2;

}

function harusLogin() {
    $('#modal_form').modal('hide');
    // $('#LoginModal').modal('show');
}
