"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instruction = /** @class */ (function () {
    function Instruction(instructionText) {
        var words = instructionText.split(' ');
        this._containersToMove = parseInt(words[1]);
        this._from = parseInt(words[3]);
        this._to = parseInt(words[5]);
    }
    Object.defineProperty(Instruction.prototype, "containersToMove", {
        get: function () {
            return this._containersToMove;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruction.prototype, "from", {
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruction.prototype, "to", {
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    Instruction.prototype.enact = function (stacks) {
        for (var i = 0; i < this._containersToMove; i++) {
            var container = stacks[this._from - 1].pop();
            if (container != undefined)
                stacks[this._to - 1].push(container);
            else
                throw Error("Bad contianer push/pop");
        }
        return stacks;
    };
    Instruction.prototype.enact9001 = function (stacks) {
        var pivotContainer = [];
        for (var i = 0; i < this._containersToMove; i++) {
            var container = stacks[this._from - 1].pop();
            if (container != undefined)
                pivotContainer.push(container);
            else
                throw Error("Bad contianer push/pop");
        }
        for (var i = pivotContainer.length - 1; i >= 0; i--) {
            stacks[this._to - 1].push(pivotContainer[i]);
        }
        return stacks;
    };
    return Instruction;
}());
exports.default = Instruction;