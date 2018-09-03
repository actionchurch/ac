
//Load first Instagram post as a large photo
var userFeed = new Instafeed({
    get: 'user',
    userId: '50382272',
    clientId: '3acf62eb656d469fb3f8cfe94960345c',
    accessToken: '50382272.1677ed0.97b0fb3f536d4266bf369032960c9dd2',
    resolution: 'standard_resolution',
    limit: '1',
    template: '<a class="feed__effect col-4" href="{{link}}" style="background-image:url({{image}})" target="_blank"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /></a>'
});
userFeed.run();

//Load other 5 images are smaller photos
var userFeed = new Instafeed({
    get: 'user',
    userId: '50382272',
    clientId: '3acf62eb656d469fb3f8cfe94960345c',
    accessToken: '50382272.1677ed0.97b0fb3f536d4266bf369032960c9dd2',
    resolution: 'low_resolution',
    limit: '9',
    template: '<a class="feed__effect col-2" href="{{link}}" style="background-image:url({{image}})" target="_blank"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /></a>'
});
userFeed.run();
