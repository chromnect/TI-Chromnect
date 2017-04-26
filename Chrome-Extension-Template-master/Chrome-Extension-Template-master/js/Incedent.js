## using JS widget
<script type="text/javascript" src="https://cdn.statuspage.io/se-v2.js"></script>
<script>
  var sp = new StatusPage.page({ page : 'l2l7j84f0961', apiKey : 'e113da2b-b051-4800-bfa5-ea195f81f3e3' });
  sp.scheduled_maintenances({
    filter : 'upcoming',
    success : function(data) {
      console.log(data.scheduled_maintenances[0].scheduled_for);
    }
  });
</script>

## using cURL
curl https://l2l7j84f0961.statuspage.io/api/v2/scheduled-maintenances/upcoming.json
