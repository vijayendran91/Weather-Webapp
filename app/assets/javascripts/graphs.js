<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});

      google.charts.setOnLoadCallback(drawChart_Temp);
      google.charts.setOnLoadCallback(drawChart_Pressure);
      google.charts.setOnLoadCallback(drawChart_Wind);
      google.charts.setOnLoadCallback(drawChart_Humidity);

      function drawChart_Temp() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Temperature (in Celcius)'],
	  <% @list.each do |datum|%>
          ['<%=((Time.at(datum['dt'])).strftime("%d")).to_s%>',<%=((datum['main']['temp'])-273).round%>],
          <%end%>
        ]);

        var options = {
          title: 'Temperature analysis of Town/City of <%=@data_hash['name']%>',
          curveType: 'function',
          legend: { position: 'bottom' },
	  width:1200,
	  height:500
        };
	var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart2'));
        chart1.draw(data, options);

	}

	function drawChart_Pressure() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Pressure in hPa'],
	  <% @list.each do |datum|%>
          ['<%=((Time.at(datum['dt'])).strftime("%d")).to_s%>',<%=(datum['main']['pressure'])%>],
          <%end%>
        ]);

        var options = {
          title: 'Pressure analysis of Town/City of <%=@data_hash['name']%>',
          curveType: 'function',
          legend: { position: 'bottom' },
	  width:1200,
	  height:500
        };
	var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart3'));
        chart1.draw(data, options);

	}



	function drawChart_Wind() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Wind (mps)'],
	  <% @list.each do |datum|%>
          ['<%=((Time.at(datum['dt'])).strftime("%d")).to_s%>',<%=(datum['wind']['speed'])%>],
          <%end%>
        ]);

        var options = {
          title: 'Wind analysis of Town/City of <%=@data_hash['name']%>',
          curveType: 'function',
          legend: { position: 'bottom' },
	  width:1200,
	  height:500
        };

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart4'));
        chart.draw(data, options);

      }


      function drawChart_Humidity() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Humidity (is percentage)'],
	  <% @list.each do |datum|%>
          ['<%=((Time.at(datum['dt'])).strftime("%d")).to_s%>',<%=(datum['main']['humidity'])%>],
          <%end%>
        ]);

        var options = {
          title: 'Humidity analysis of Town/City of <%=@data_hash['name']%>',
          curveType: 'function',
          legend: { position: 'bottom' },
	  width:1200,
	  height:500
        };

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart1'));
        chart.draw(data, options);

      }





    </script>
   
