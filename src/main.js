var React = require('react'),
    ReactDOM = require('react-dom');

var Jack = require('./lets-do-babel'),
    NotMain = require('./not-main');

var Main = React.createClass({
    render: function() {
        return (
            <div className="Main">
            	<ul>
            		<li>Yes <strikethrough>Ordered</strikethrough> Unordered list item #1</li>
            		<li>Yes <strikethrough>Ordered</strikethrough> Unordered list item #2</li>
            	</ul>
				<NotMain />
				<Jack />
			</div>
        );
    }
});


module.exports = Main;
// ReactDOM.render(<Main />, document.getElementById('reactApp'));
