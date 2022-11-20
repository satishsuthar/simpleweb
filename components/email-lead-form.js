var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailLeadForm = function (_React$Component) {
    _inherits(EmailLeadForm, _React$Component);

    function EmailLeadForm(props) {
        _classCallCheck(this, EmailLeadForm);

        var _this = _possibleConstructorReturn(this, (EmailLeadForm.__proto__ || Object.getPrototypeOf(EmailLeadForm)).call(this, props));

        _this.state = {
            hasFilledContact: true
        };
        return _this;
    }

    _createClass(EmailLeadForm, [{
        key: "render",
        value: function render() {
            if (this.state.hasFilledContact) return React.createElement(
                "a",
                { href: "#", "class": "c-dark button button-green" },
                React.createElement(
                    "span",
                    null,
                    "Book Consultation "
                )
            );else return React.createElement(
                "h1",
                null,
                "Thank you very much contacting us."
            );
        }
    }]);

    return EmailLeadForm;
}(React.Component);

var domContainer = document.getElementById('email-lead-form');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(EmailLeadForm));