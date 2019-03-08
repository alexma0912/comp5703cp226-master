const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
// Define the schema, initially using String for testing
const priceSchema = new Schema({
    price: {type: String},
});
*/
const tradeSchema = new Schema({
    Timestamp_hour: {type: Date, index: true},
    Code: {type: String, index:true},
    Open_price: {type: Number},
    Close_price: {type: Number},
    Highest_price: {type: Number},
    Lowest_price: {type: Number},
    Total_Volume: {type: Number},
    Values:{
        0: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        1: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        2: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        3: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        4: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        5: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        6: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        7: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        8: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        9: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        10: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        11: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        12: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        13: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        14: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        15: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        16: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        17: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        18: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        19: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        20: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        21: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        22: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        23: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        24: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        25: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        26: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        27: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        28: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        29: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        30: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        31: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        32: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        33: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        34: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        35: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        36: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        37: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        38: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        39: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        40: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        41: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        42: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        43: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        44: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        45: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        46: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        47: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        48: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        49: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        50: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        51: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        52: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        53: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        54: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        55: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        56: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        57: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        58: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        },
        59: {
            0: [{
                amount: Number,
                price: Number
            }],
            1: [{
                amount: Number,
                price: Number
            }],
            2: [{
                amount: Number,
                price: Number
            }],
            3: [{
                amount: Number,
                price: Number
            }],
            4: [{
                amount: Number,
                price: Number
            }],
            5: [{
                amount: Number,
                price: Number
            }],
            6: [{
                amount: Number,
                price: Number
            }],
            7: [{
                amount: Number,
                price: Number
            }],
            8: [{
                amount: Number,
                price: Number
            }],
            9: [{
                amount: Number,
                price: Number
            }],
            10: [{
                amount: Number,
                price: Number
            }],
            11: [{
                amount: Number,
                price: Number
            }],
            12: [{
                amount: Number,
                price: Number
            }],
            13: [{
                amount: Number,
                price: Number
            }],
            14: [{
                amount: Number,
                price: Number
            }],
            15: [{
                amount: Number,
                price: Number
            }],
            16: [{
                amount: Number,
                price: Number
            }],
            17: [{
                amount: Number,
                price: Number
            }],
            18: [{
                amount: Number,
                price: Number
            }],
            19: [{
                amount: Number,
                price: Number
            }],
            20: [{
                amount: Number,
                price: Number
            }],
            21: [{
                amount: Number,
                price: Number
            }],
            22: [{
                amount: Number,
                price: Number
            }],
            23: [{
                amount: Number,
                price: Number
            }],
            24: [{
                amount: Number,
                price: Number
            }],
            25: [{
                amount: Number,
                price: Number
            }],
            26: [{
                amount: Number,
                price: Number
            }],
            27: [{
                amount: Number,
                price: Number
            }],
            28: [{
                amount: Number,
                price: Number
            }],
            29: [{
                amount: Number,
                price: Number
            }],
            30: [{
                amount: Number,
                price: Number
            }],
            31: [{
                amount: Number,
                price: Number
            }],
            32: [{
                amount: Number,
                price: Number
            }],
            33: [{
                amount: Number,
                price: Number
            }],
            34: [{
                amount: Number,
                price: Number
            }],
            35: [{
                amount: Number,
                price: Number
            }],
            36: [{
                amount: Number,
                price: Number
            }],
            37: [{
                amount: Number,
                price: Number
            }],
            38: [{
                amount: Number,
                price: Number
            }],
            39: [{
                amount: Number,
                price: Number
            }],
            40: [{
                amount: Number,
                price: Number
            }],
            41: [{
                amount: Number,
                price: Number
            }],
            42: [{
                amount: Number,
                price: Number
            }],
            43: [{
                amount: Number,
                price: Number
            }],
            44: [{
                amount: Number,
                price: Number
            }],
            45: [{
                amount: Number,
                price: Number
            }],
            46: [{
                amount: Number,
                price: Number
            }],
            47: [{
                amount: Number,
                price: Number
            }],
            48: [{
                amount: Number,
                price: Number
            }],
            49: [{
                amount: Number,
                price: Number
            }],
            50: [{
                amount: Number,
                price: Number
            }],
            51: [{
                amount: Number,
                price: Number
            }],
            52: [{
                amount: Number,
                price: Number
            }],
            53: [{
                amount: Number,
                price: Number
            }],
            54: [{
                amount: Number,
                price: Number
            }],
            55: [{
                amount: Number,
                price: Number
            }],
            56: [{
                amount: Number,
                price: Number
            }],
            57: [{
                amount: Number,
                price: Number
            }],
            58: [{
                amount: Number,
                price: Number
            }],
            59: [{
                amount: Number,
                price: Number
            }]
        }
    }
});

module.exports = mongoose.model("Trade", tradeSchema);
//module.exports = mongoose.model("Price", priceSchema);