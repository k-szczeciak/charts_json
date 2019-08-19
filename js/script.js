var labels = [];
var data = [];
var place = document.getElementById("myid");
var ctx = document.getElementById('myChart').getContext('2d');

var stocks = $.ajax({
    /*url: "http://api.nbp.pl/api/cenyzlota?format=json", */
    url: "http://api.nbp.pl/api/cenyzlota/last/50", 
    data: {},
    type: "GET",
    dataType: "json",
    /*
    success: function(result1){
        console.log(result1);
        place.innerText = result1[0].cena;
        console.log(result1[0].cena);
    }*/
    }).done(function(result) {
        
        for (let i = 0; i < result.length; i++) {
            labels[i] = result[i].data;
            data[i] = result[i].cena * 31,1;
        }

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                
                datasets: [{
                    label: 'gold',
                    data: data,
                    borderColor: '#94A4E3',
                    fill: false,
                }]
            }
        });

    })










    