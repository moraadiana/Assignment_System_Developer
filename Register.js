var settings = {
  "url": "http://52.59.33.40/web/api/register",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "text/plain",
    "Authorization": "Bearer 2XNVmuH2YVhYvVGgh4YkV9m6ph4c8CxMMX6UzeeDh7LJTmgdLk4Fz38QLwFt3sSY6BHkCeK8B3Jhgt23Q4dX6A3pmFRMGnJejwDg",
    "Cookie": "_csrf=42d5a9407e428b01857317eff20f6c33a016d65a529462b7132e935fa41e8daaa%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22pJWLgKJ5aKZB0f9TnrgTSVWwlOoqBc-l%22%3B%7D"
  },
  "data": "{\r\n    \"Firstname\": \"Diana\",\r\n    \"Surname\": \"Nyachae\"\r\n        \r\n}",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
