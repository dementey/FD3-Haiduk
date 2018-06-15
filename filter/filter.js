var filterComponent = React.createClass({

    displayName: 'filterComponent',

    propTypes: {
        defaultList: React.PropTypes.arrayOf(React.PropTypes.string)
    },
    //иницилизируем стейты
    getInitialState: function () {
        return {
            statelist: this.props.defaultList.slice(),
            stateInputText: '',
            checkedCheckbox: false,
        }
    },
    //функция отработки событий ввода текста
    inputTextChange: function (EO) {
        this.changeStatelist(EO.target.value, this.state.checkedCheckbox);
    },
    //функция отработки событий изменения чекбокса
    checkboxChecked: function (EO) {
        this.changeStatelist(this.state.stateInputText, EO.target.checked);
    },
    //функция сортировки массива в зависомости от стейтов
    changeStatelist: function (inputText, checked) {
        var newStateList = this.props.defaultList.filter((v) => v.includes(inputText));

        checked
            ? newStateList.sort()
            : null;

        this.setState({ statelist: newStateList, stateInputText: inputText, checkedCheckbox: checked, });
    },
    //рендеринг
    render: function () {
        var renderlist = this.state.statelist.map(function (v) { return React.DOM.li({ key: v }, v) });
        return React.DOM.div({ className: "filter" },
            React.DOM.label(null,
                'Cортировать',
                React.DOM.input({ type: 'checkbox', onClick: this.checkboxChecked }, null)),
            React.DOM.label(null,
                'Найти',
                React.DOM.input({ type: 'text', onChange: this.inputTextChange }, null)),
            React.DOM.div({ className: "list" }, renderlist)
        );
    }
});