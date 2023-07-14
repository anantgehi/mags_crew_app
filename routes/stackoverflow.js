var express = require('express');
var router = express.Router();
require('dotenv').config();
const BigQuery = require('@google-cloud/bigquery');

/* GET listing. */
router.get('/:query_id', function(req, res, next) {
  query('hack-team-magscrew',req.params.query_id)
  .then((result) => res.send(result))
});

function query(projectId,query_id) {

  // Creates a client
  const bigquery = new BigQuery({
    projectId: projectId,
  });

  var sqlQuery

  console.log('query_id:',query_id)

  switch(query_id){
    case '1':
      // The SQL query to run
      sqlQuery = `SELECT
      *
      FROM \`hack-team-magscrew.hackcrewdataset.garnish_data\`
      LIMIT 100`;
      break;
  }
  

  // Query options list: https://cloud.google.com/bigquery/docs/reference/v2/jobs/query
  const options = {
    query: sqlQuery,
    useLegacySql: false, // Use standard SQL syntax for queries.
  };

  // Runs the query
  return bigquery
    .query(options)
    .then(results => {
      const rows = results[0];
      console.log(rows)
      return rows
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

function printResult(rows) {
  console.log('Query Results:');
  rows.forEach(function (row) {
    let url = row['url'];
    let viewCount = row['view_count'];
    console.log(`url: ${url}, ${viewCount} views`);
  });
}

module.exports = router;
