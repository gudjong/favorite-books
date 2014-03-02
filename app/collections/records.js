Records = new Meteor.Collection('records'
//    , {
//    schema: new SimpleSchema({
//        transactionNumber: {
//            type: Number,
//            min: 0,
//            denyUpdate: true,
//            autoValue: function () {
//                if (this.isInsert) {
//                    return incrementCounter('transactionNumber');
//                } else {
//                    this.unset();
//                }
//            }
//        },
//        registrationTime: {
//            type: Date,
//            denyUpdate: true,
//            autoValue: function () {
//                if (this.isInsert) {
//                    return new Date().getTime();
//                } else {
//                    this.unset();
//                }
//            }
//        },
//        transactionDate: {
//            type: Date,
//            denyUpdate: true
//        },
//        description: {
//            type: String,
//            denyUpdate: true
//        }
//    })
//}
);
