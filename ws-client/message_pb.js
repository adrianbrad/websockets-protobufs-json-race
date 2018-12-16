/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.message.Message', null, global);
goog.exportSymbol('proto.message.StringInt32NumberPair', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.message.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.message.Message.repeatedFields_, null);
};
goog.inherits(proto.message.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.message.Message.displayName = 'proto.message.Message';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.message.Message.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.message.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.message.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.message.Message} msg The msg instance to transform.
 * @return {!Object}
 */
proto.message.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    times: msg.getTimes(),
    pairList: jspb.Message.toObjectList(msg.getPairList(),
    proto.message.StringInt32NumberPair.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.message.Message}
 */
proto.message.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.message.Message;
  return proto.message.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.message.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.message.Message}
 */
proto.message.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimes(value);
      break;
    case 2:
      var value = new proto.message.StringInt32NumberPair;
      reader.readMessage(value,proto.message.StringInt32NumberPair.deserializeBinaryFromReader);
      msg.getPairList().push(value);
      msg.setPairList(msg.getPairList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.message.Message} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.message.Message.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.message.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.message.Message.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTimes();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getPairList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.message.StringInt32NumberPair.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.message.Message} The clone.
 */
proto.message.Message.prototype.cloneMessage = function() {
  return /** @type {!proto.message.Message} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 times = 1;
 * @return {number}
 */
proto.message.Message.prototype.getTimes = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.message.Message.prototype.setTimes = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated StringInt32NumberPair pair = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.message.StringInt32NumberPair>}
 */
proto.message.Message.prototype.getPairList = function() {
  return /** @type{!Array.<!proto.message.StringInt32NumberPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.message.StringInt32NumberPair, 2));
};


/** @param {Array.<!proto.message.StringInt32NumberPair>} value  */
proto.message.Message.prototype.setPairList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.message.Message.prototype.clearPairList = function() {
  this.setPairList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.message.StringInt32NumberPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.message.StringInt32NumberPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.message.StringInt32NumberPair.displayName = 'proto.message.StringInt32NumberPair';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.message.StringInt32NumberPair.prototype.toObject = function(opt_includeInstance) {
  return proto.message.StringInt32NumberPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.message.StringInt32NumberPair} msg The msg instance to transform.
 * @return {!Object}
 */
proto.message.StringInt32NumberPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    str: msg.getStr(),
    int32number: msg.getInt32number()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.message.StringInt32NumberPair}
 */
proto.message.StringInt32NumberPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.message.StringInt32NumberPair;
  return proto.message.StringInt32NumberPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.message.StringInt32NumberPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.message.StringInt32NumberPair}
 */
proto.message.StringInt32NumberPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStr(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInt32number(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.message.StringInt32NumberPair} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.message.StringInt32NumberPair.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.message.StringInt32NumberPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.message.StringInt32NumberPair.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getInt32number();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.message.StringInt32NumberPair} The clone.
 */
proto.message.StringInt32NumberPair.prototype.cloneMessage = function() {
  return /** @type {!proto.message.StringInt32NumberPair} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string str = 1;
 * @return {string}
 */
proto.message.StringInt32NumberPair.prototype.getStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.message.StringInt32NumberPair.prototype.setStr = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 int32Number = 2;
 * @return {number}
 */
proto.message.StringInt32NumberPair.prototype.getInt32number = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.message.StringInt32NumberPair.prototype.setInt32number = function(value) {
  jspb.Message.setField(this, 2, value);
};


goog.object.extend(exports, proto.message);
