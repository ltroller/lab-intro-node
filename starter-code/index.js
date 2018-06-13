var SortedList = function() {
    this.list = [];
    this.length = 0;
    return this;
};

SortedList.prototype.add     = function(item) {
    this.list.push(item);
    this.length++;
    this._sort();
    return this;
}
SortedList.prototype.get     = function(pos) {
   try {
        return this.list[pos-1];
    } catch(e) {
        this._throwError("OutOfBounds");
    }
}
SortedList.prototype.max     = function() {
    if(this.list.length == 0) {
        this._throwError("EmptySortedList");
    } else {
        return this.list[this.list.length-1];
    }
}
SortedList.prototype.min     = function() {
    if(this.list.length == 0) {
        this._throwError("EmptySortedList");
    } else {
        return this.list[0];
    }    
}
SortedList.prototype.average = function() {
    if(!this.list.length) {
        this._throwError("EmptySortedList");
    } else {
        return this.sum()/this.list.length;
    }
}
SortedList.prototype.sum     = function() {
    if(!this.list.length) {
        this._throwError("EmptySortedList");
    } else {
        return this.list.reduce((a,b) => a + b);
    }
}

SortedList.prototype._sort  = function() {
    this.list.sort((a,b) => a - b);
}

SortedList.prototype._throwError = function(msg) {
    throw new Error(msg);
}

module.exports = SortedList;