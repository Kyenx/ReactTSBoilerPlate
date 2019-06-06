"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var recharts_1 = require("recharts");
var COLORS = ['#FFECB3', '#FFB300', '#EF6C00', '#BF360C', '#B2B2B2'];
var RADIAN = Math.PI / 180;
var PieChartComponent = function (props) {
    var data = props.data, chartLabel = props.chartLabel, width = props.width, height = props.height;
    var pieHeight = !!height ? height : 102;
    var pieWidth = !!width ? width : 102;
    return (React.createElement(recharts_1.PieChart, { width: pieWidth, height: pieHeight },
        React.createElement(recharts_1.Pie, { data: data, innerRadius: 40, outerRadius: 50, fill: "#8884d8", paddingAngle: 0, dataKey: 'value', startAngle: 90, endAngle: -270 },
            data.map(function (entry, index) { return React.createElement(recharts_1.Cell, { key: index, fill: COLORS[index % COLORS.length] }); }),
            React.createElement(recharts_1.Label, { value: chartLabel, offset: 0, position: "center", style: { fontSize: '32px' } }))));
};
exports.default = PieChartComponent;
//# sourceMappingURL=PieChart.js.map

//# sourceMappingURL={"version":3,"file":"PieChart.js","sourceRoot":"","sources":["PieChart.tsx"],"names":[],"mappings":";;;;;;;;;AAAA,2CAA+B;AAC/B,qCAEkB;AAclB,IAAM,MAAM,GAAG,CAAC,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS,CAAC,CAAC;AACvE,IAAM,MAAM,GAAG,IAAI,CAAC,EAAE,GAAG,GAAG,CAAC;AAE7B,IAAM,iBAAiB,GAA4C,UAAC,KAAK;IAC/D,IAAA,iBAAI,EAAE,6BAAU,EAAE,mBAAK,EAAE,qBAAM,CAAW;IAClD,IAAM,SAAS,GAAG,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,GAAG,CAAC;IAC1C,IAAM,QAAQ,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC;IAEvC,OAAO,CACL,oBAAC,mBAAQ,IAAC,KAAK,EAAE,QAAQ,EAAE,MAAM,EAAE,SAAS;QACxC,oBAAC,cAAG,IACF,IAAI,EAAE,IAAI,EACV,WAAW,EAAE,EAAE,EACf,WAAW,EAAE,EAAE,EACf,IAAI,EAAC,SAAS,EACd,YAAY,EAAE,CAAC,EACf,OAAO,EAAC,OAAO,EACf,UAAU,EAAE,EAAE,EACd,QAAQ,EAAE,CAAC,GAAG;YAGb,IAAI,CAAC,GAAG,CAAC,UAAC,KAAK,EAAE,KAAK,IAAK,OAAA,oBAAC,eAAI,IAAC,GAAG,EAAE,KAAK,EAAE,IAAI,EAAE,MAAM,CAAC,KAAK,GAAG,MAAM,CAAC,MAAM,CAAC,GAAG,EAAxD,CAAwD,CAAC;YAErF,oBAAC,gBAAK,IAAC,KAAK,EAAE,UAAU,EAAE,MAAM,EAAE,CAAC,EAAE,QAAQ,EAAC,QAAQ,EAAC,KAAK,EAAE,EAAC,QAAQ,EAAE,MAAM,EAAC,GAAG,CAC/E,CACG,CACd,CAAC;AACJ,CAAC,CAAC;AAEF,kBAAe,iBAAiB,CAAC"}