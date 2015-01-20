
var React = require('react');
var Navbar = require('./components/navbar');
var Main = require('./components/main');

var KapiApp = React.createClass({
  loadData: function() {
    return $.get('http://localhost:3000/user/5481e9662f3b8d8a053a7330');
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {
    this.loadData().then(function(data) {console.log(data);});
  },
  render: function() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
});

React.render(
  <KapiApp />,
  document.getElementById('app')
);
//$('.ui.modal').modal('show');
