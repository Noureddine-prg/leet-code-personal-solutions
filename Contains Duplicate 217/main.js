let array = [1,2,3,1]

var containsDuplicate = function(nums) {
    
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        
        if(map.get(nums[i]) === undefined){
            
            map.set(nums[i], nums[i])
            
        }else{
                
            return true
        }
    
    }
        
    return false
        
    };

console.log(containsDuplicate(array))