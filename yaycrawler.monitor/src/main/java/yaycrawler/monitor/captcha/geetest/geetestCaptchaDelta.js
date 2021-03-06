var getDeltaArray = function () {
    var a =
        [[-18,-22,0],[0,0,0],[0,1,600],[1,1,619],[2,1,624],[3,1,632],[4,1,640],[5,1,656],[6,1,672],[7,1,680],[8,1,688],[9,2,698],[11,2,704],[13,2,712],[13,3,721],[15,3,737],[16,4,744],[17,4,753],[18,4,768],[19,4,792],[20,4,816],[21,4,824],[22,4,840],[23,4,848],[24,4,856],[25,4,864],[26,4,872],[27,4,904],[30,4,912],[31,4,928],[33,4,944],[34,4,952],[35,4,1016],[36,4,1136],[37,4,1144],[39,4,1154],[40,4,1160],[41,4,1169],[43,4,1177],[44,4,1185],[46,4,1289],[47,4,1320],[47,4,1609]];
    var deltaArray = [];
    var prevPoint = [0, 0, 0];
    for (var i = 0; i < a.length; i++) {
        var pointDelta = [];
        pointDelta[0] = a[i][0] - prevPoint[0];
        pointDelta[1] = a[i][1] - prevPoint[1];
        pointDelta[2] = a[i][2] - prevPoint[2];
        deltaArray.push(pointDelta);
        prevPoint = a[i];
    }
    return deltaArray;
};
JSON.stringify(getDeltaArray());


