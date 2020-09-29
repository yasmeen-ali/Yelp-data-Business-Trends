

  document.getElementById("j1btn").addEventListener("click", function(){
    
    console.log('linkworking json1');
    
    
    fetch('/json1')
  .then(res => res.json())
  .then(data => {

    
    const ychart = data.Rperyears;
    const totaly = ychart.length;

    console.log(data);
    // Refresh the Total Votes every 2 seconds
    // setInterval(() => {
    //   fetch('http://localhost:3000/poll')
    //     .then(res => res.json())
    //     .then(data => document.querySelector('#chartTitle').textContent = `Total Votes: ${data.votes.length}`)
    //     .catch(err => console.log(err));
    // }, 2000);

    // Count vote points - acc/current
    const totalr = ychart.reduce(
      (acc, vote) => (
        (acc[vote.year] = (acc[vote.year] || 0) + parseInt(vote.count)), acc
      ),
      {}
    );
   // console.log(JSON.stringify(totalr));
    // Set initial Data Points


    let dataPoints = [
      { label: '2004', y: totalr.yr2004 },
      { label: '2005', y: totalr.yr2005 },
      { label: '2006', y: totalr.yr2006 },
      { label: '2007', y: totalr.yr2007 },
      { label: '2008', y: totalr.yr2008 },
      { label: '2009', y: totalr.yr2009 },
      { label: '2010', y: totalr.yr2010 },
      { label: '2011', y: totalr.yr2011 },
      { label: '2012', y: totalr.yr2012 },
      { label: '2013', y: totalr.yr2013 },
      { label: '2014', y: totalr.yr2014 },
      { label: '2015', y: totalr.yr2015 },
      { label: '2016', y: totalr.yr2016 },
      { label: '2017', y: totalr.yr2017 }
    ];

    const chartContainer2 = document.querySelector('#chartContainer2');

    if (chartContainer2) {
      const chart2 = new CanvasJS.Chart('chartContainer2', {
        animationEnabled: true,
        theme: 'theme1',
        title:{
          text: "Yearly Reviews"
        },
        data: [
          {
            type: 'column',
            dataPoints: dataPoints
          }
        ]
      });
     chart2.render();

    }  

  });


});

document.getElementById("j2btn").addEventListener("click", function(){
    
  console.log('linkworking json2');
fetch('/json2')
.then(res => res.json())
.then(data => {

  //--
  const revarr = data.Rcpercats;


  //document.querySelector('#chartTitle').textContent = `No of Years Reviewed: ${totaly}`;
  //console.log(data);
  // Refresh the Total Votes every 2 seconds
  // setInterval(() => {
  //   fetch('http://localhost:3000/poll')
  //     .then(res => res.json())
  //     .then(data => document.querySelector('#chartTitle').textContent = `Total Votes: ${data.votes.length}`)
  //     .catch(err => console.log(err));
  // }, 2000);
  arr = revarr.sort(sortByProperty('ReviewCount'));
  // Count vote points - acc/current
  const totalr = arr.reduce(
    (acc, vote) => (
      (acc[vote.Category ] = (acc[vote.Category] || 0) + vote.ReviewCount), acc
    ),
    {}
  );
  //--

  let dataPoints =  [
    { y: totalr.Restaurants, indexLabel: "Restaurants" },
    { y: totalr.Food, indexLabel: "Food" },
    { y: totalr.Nightlife, indexLabel: "Nightlife" },
    { y: totalr.Bars, indexLabel: "Bars" },
    { y: totalr.AmericanNew, indexLabel: "American New" },
    { y: totalr.AmericanTraditional, indexLabel: "American (Traditional)" },
    { y: totalr.BreakfastandBrunch, indexLabel: "Breakfast & Brunch" },
    { y: totalr.EventPlanningServices, indexLabel: "EventPlanningServices" },
    { y: totalr.Shopping, indexLabel: "Shopping" },
    { y: totalr.Sandwiches, indexLabel: "Sandwiches" }
   
  
    
  ];




  const chartContainer2 = document.querySelector('#chartContainer2'); {
    var chart = new CanvasJS.Chart("chartContainer2",
    {
      title:{
        text: "Maximum Reviewed Category"
      },
      legend: {
        maxWidth: 500,
        itemWidth: 240
      },
      data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{indexLabel}",
        dataPoints:dataPoints
      }
      ]
    });
    chart.render();

  }

  
  




});
});


var sortByProperty = function (property) {

  return function (x, y) {

      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? -1 : 1));

  };

};


/// - Start Chart
document.getElementById("j3btn").addEventListener("click", function(){
    
  console.log('linkworking json3');
fetch('/json3')
.then(res => res.json())
.then(data => {

  //--
  const arr = data.Rpstars;



  const totalr = arr.reduce(
    (acc, vote) => (
      (acc[vote.Stars ] = (acc[vote.Stars] || 0) + parseInt(vote.ReviewCount)), acc
    ),
    {}
  );
  //--

  let dataPoints =  [
    
      { x: 1, y: totalr.One, label: "*"},
      { x: 2, y: totalr.Two,  label: "**" },
      { x: 3, y: totalr.Three,  label: "***"},
      { x: 4, y: totalr.Four,  label: "****"},
      { x: 5, y: totalr.Five, label: "*****"}   
      
   
  
    
  ];




  const chartContainer2 = document.querySelector('#chartContainer2'); {
    var chart = new CanvasJS.Chart("chartContainer2",
    {
      title:{
        text: "Reviews per Star Rating"
      },
      data: [

      {
        dataPoints: dataPoints
      }
      ]
    });

    chart.render();

  }

  
  




});
});


