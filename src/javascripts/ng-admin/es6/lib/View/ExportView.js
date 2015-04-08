import ListView from './ListView';

class ExportView extends ListView {
    constructor(name) {
        super(name);
        this._fields = [];
        this._type = 'ExportView';
    }
}

export default ExportView;
