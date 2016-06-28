var React = require('react'),
    ReactDOM = require('react-dom');

var Main = require('./main');

var RootComponent = React.createClass({
    render: function() {
        return (
            <div className="RootComponent">
            	<Main />
			</div>
        );
    }
});

ReactDOM.render(<RootComponent />, document.getElementById('reactApp'));
