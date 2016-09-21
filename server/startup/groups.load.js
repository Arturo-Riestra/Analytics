Meteor.startup(function() {
  if(Groups.find().count() === 0) {
    var groups = [
        { 'name' : 'BU - Automotive', 'adobeID' : 's5384_56aa77ade4b0374df9ee807c'},
        { 'name' : 'BU - Digital Networking', 'adobeID' : 's5384_56aa8a81e4b03c677a83e67c'},
        { 'name' : 'BU - RF', 'adobeID' : 's5384_56aa8b74e4b02d00deb6870a'},
        { 'name' : 'BU - Security & Connectivity', 'adobeID' : 's5384_56aa8975e4b08ed10f74922c'},
        { 'name' : 'BU - Standard Products', 'adobeID' : 's5384_56aa9628e4b03c677a83e68a'},
    ];
    groups.forEach(function(group) {
      Groups.insert(group);
    });
  }
});
