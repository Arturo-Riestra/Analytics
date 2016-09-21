Meteor.startup(function() {
var date = new Date();

  if(Segments.find().count() === 0) {
    var segments = [
      { 'adobeID' : 's5384_5720edd7e4b09bcfcb117d71' , 'name' : 'BL - AAA', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa7701e4b08ed10f749217' , 'name' : 'BL - Automotive MCUs', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8a5ce4b0374df9ee809a' , 'name' : 'BL - Digital Networking MPUs', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa89ece4b08ed10f74922e' , 'name' : 'BL - Digital Networking SW', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa9462e4b0a17171bbb091' , 'name' : 'BL - General Applications GA', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_574f0183e4b05cb8afe514f6' , 'name' : 'BL - Infotainment & Driver Assistance', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8cf2e4b0a17171bbb08b' , 'name' : 'BL - Logic', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8912e4b0a17171bbb084' , 'name' : 'BL - Microcontrollers MCU', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8c2ee4b02d00deb6870c' , 'name' : 'BL - MOSFETs', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8cc9e4b08ed10f749232' , 'name' : 'BL - Power MOS Mosfets', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8b0fe4b03c677a83e67d' , 'name' : 'BL - RF - all others', 'group': 'BU - RF', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8b45e4b02d00deb68709' , 'name' : 'BL - RF Power Transistors', 'group': 'BU - RF', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_579fb734e4b027f561368c0a' , 'name' : 'BL - Secure Identification Solutions SIS', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8070e4b0eed561187bc2' , 'name' : 'BL - Secure Interfaces & Power SI&P', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8166e4b0a00d74ff73d7' , 'name' : 'BL - Secure Mobile Transactions SMT', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56ddb71ae4b017460268725e' , 'name' : 'BL - Secure Monitoring & Control', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_5720eee6e4b092228c369bc3' , 'name' : 'BL - Sensors', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa77ade4b0374df9ee807c' , 'name' : 'BU - Automotive', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8a81e4b03c677a83e67c' , 'name' : 'BU - Digital Networking', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8b74e4b02d00deb6870a' , 'name' : 'BU - RF', 'group': 'BU - RF', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa8975e4b08ed10f74922c' , 'name' : 'BU - Security & Connectivity', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa9628e4b03c677a83e68a' , 'name' : 'BU - Standard Products', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_574defb3e4b0b9f0025dc615' , 'name' : 'WPT - ADAS MCUs & Processors', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa516ce4b0eed561187b9a' , 'name' : 'WPT - Automotive MOSFETs', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa70c5e4b03c677a83e65e' , 'name' : 'WPT - Automotive Products', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa5039e4b0a17171bbb041' , 'name' : 'WPT - Bipolar Transistors - except RF Bipolar Transistors', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa6bc6e4b0374df9ee806c' , 'name' : 'WPT - CodeWarrior', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa4c8ae4b03c677a83e63c' , 'name' : 'WPT - Diodes - Except PIN and Varicap Diodes', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa4928e4b0374df9ee803f' , 'name' : 'WPT - Discretes and Logic', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_574dd565e4b0b9c786742de3' , 'name' : 'WPT - Drivers & Energy Systems', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa4df8e4b0eed561187b94' , 'name' : 'WPT - ESD Protection', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa5804e4b0374df9ee8053' , 'name' : 'WPT - High Side Switches', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_5797943ae4b0565f6f5f2037' , 'name' : 'WPT - High Speed Interfaces', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56eb2996e4b0fc0d11b59d3d' , 'name' : 'WPT - Host Processors', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : '537d2351e4b0e6728d7e2c13' , 'name' : 'WPT - i.MX Applications Processors', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_57978d44e4b04b42d76b6b33' , 'name' : 'WPT - Interface and System Management', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_574dd76ee4b0fcd009c57326' , 'name' : 'WPT - In-Vehicle Networking', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa6c1be4b0a17171bbb065' , 'name' : 'WPT - Kinetis Cortex-M', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa50b4e4b0a00d74ff73b0' , 'name' : 'WPT - Logic', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa58e7e4b0a00d74ff73b9' , 'name' : 'WPT - Low Side Switches', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_57979658e4b0d151d173e675' , 'name' : 'WPT - Low Speed Interfaces', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa6cfde4b03c677a83e659' , 'name' : 'WPT - LPC ARM7-ARM9', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa6c89e4b0374df9ee806d' , 'name' : 'WPT - LPC Cortex-M', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa7123e4b08ed10f749212' , 'name' : 'WPT - MCUs and Processors for Automotive', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_574e0052e4b05cb8afe51494' , 'name' : 'WPT - Motion Sensors', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_57212dc7e4b092228c369c02' , 'name' : 'WPT - NFC and Reader ICs', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56d9dab5e4b0ad9e8c953795' , 'name' : 'WPT - Personal Health', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_57979768e4b027f56136889b' , 'name' : 'WPT - Power Management for SIP', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56eb291ce4b04d35b2ceab09' , 'name' : 'WPT - PowerQUICC Processors', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa5942e4b0a00d74ff73ba' , 'name' : 'WPT - Pre-Drivers', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56eb27b8e4b0f7ef339cfbe7' , 'name' : 'WPT - QorIQ ARM', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56eb27e9e4b0946c34a63051' , 'name' : 'WPT - QorIQ Power Architecture', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56eb286ee4b0189422045dc5' , 'name' : 'WPT - QorIQ Qonverge', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_574df2f5e4b0b9f0025dc619' , 'name' : 'WPT - Radar', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa6971e4b0eed561187baf' , 'name' : 'WPT - RF - except RF Power Transistors', 'group': 'BU - RF', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa67f0e4b0374df9ee8061' , 'name' : 'WPT - RF - RF Power Transistors', 'group': 'BU - RF', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa51e8e4b02d00deb686c8' , 'name' : 'WPT - RF Small-Signal MOSFETs', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_574de12ce4b059e6c5e42944' , 'name' : 'WPT - Safety & Power Management', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa7448e4b02d00deb686e8' , 'name' : 'WPT - SCM - Single Chip Modules', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_5706d40be4b0946c34a63ab3' , 'name' : 'WPT - SDK and BSP', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_574dee62e4b07b4c96c32180' , 'name' : 'WPT - Secure Car  Access', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_579f911ee4b04b42d76b6ec5' , 'name' : 'WPT - Secure Identity', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_579f9fece4b09b485ea80778' , 'name' : 'WPT - Secure Mobility & Retail', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_579f94a5e4b0d151d173e9f9' , 'name' : 'WPT - Secure Payment', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_57979870e4b0d151d173e676' , 'name' : 'WPT - Security for SIP', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56ddc226e4b0ece85e844d12' , 'name' : 'WPT - Small-signal MOSFETs GA', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56d9d7aae4b04680bd8308d8' , 'name' : 'WPT - Smart Power', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa671de4b08ed10f74920a' , 'name' : 'WPT - Squib Drivers', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa524be4b0a00d74ff73b3' , 'name' : 'WPT - Standard MOSFETs', 'group': 'BU - Standard Products', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56eb2b45e4b0f7ef339cfbe9' , 'name' : 'WPT - StarCore DSPs', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_574e0632e4b059e6c5e42966' , 'name' : 'WPT - Vehicle Dynamics', 'group': 'BU - Automotive', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa6e32e4b0d559b343020b' , 'name' : 'WPT - VFxxx Controller Solutions', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_5706d2e1e4b0305374c866fc' , 'name' : 'WPT - VortiQa SW', 'group': 'BU - Digital Networking', 'createdAt': date.toJSON()},
        { 'adobeID' : 's5384_56aa6ec3e4b0eed561187bb7' , 'name' : 'WPT - Wireless Connectivity', 'group': 'BU - Security & Connectivity', 'createdAt': date.toJSON()}
    ];
    segments.forEach(function(segment) {
      Segments.insert(segment);
    });
  }
});
