export class Tag {
    id:number = 0
    name:string
    father:Tag = this
    children:Tag[] = []
    constructor (pName:string) {
        this.name = pName
    }
    getChildById (pChildId:number):Tag {
        const child = this.children.find(child => child.id === pChildId)
        if (!child) throw new Error('The tag doesn\'t have a child with that id')
        return child
    }
    getChildByName (pChildName:string):Tag {
        const child = this.children.find(child => child.name === pChildName)
        if (!child) throw new Error('The tag doesn\'t have a child with that name')
        return child
    }
    createChild (pChildName:string) {
        const child = new Tag(pChildName)
        child.id = this.children.length
        child.father = this
        this.children.push(child)
    }
    createChildren (pChildrenName:string[]) {
        pChildrenName.forEach(childName => this.createChild(childName))
    }
    moveTagToThisChildren (pTag:Tag) {
        pTag.id = this.children.length
        pTag.father = this
        this.children.push(pTag)
    }
}
export const tagRoot = new Tag('tags')

const tagElectronic = new Tag('electronic')
tagElectronic.createChildren(['phone', 'pc', 'laptop', 'tablet', 'drawing pad'])

const tagVehicle = new Tag('vehicle')
tagVehicle.createChildren(['motorcicle', 'car', 'bicicle', 'scooter', 'skateboard'])

const tagFurniture = new Tag('furniture')
tagFurniture.createChildren(['bed', 'closet', 'couch', 'table', 'desk'])

const tagCloth = new Tag('cloth')
tagCloth.createChildren(['tshirt', 'pants', 'shoes', 'coat', 'skirt'])

const tagVisualArt = new Tag('visual art')
tagVisualArt.createChildren(['abstract', 'realism', 'horror', 'pattern', 'cartoon'])

const tagMusic = new Tag('music')
tagMusic.createChildren(['chill', 'romantic', 'sad', 'happy', 'dance'])

const tagFood = new Tag('food')
tagFood.createChildren(['bakery', 'vegan', 'salad', 'bowl', 'meat'])

const tagsAncestors:Tag[] = [tagElectronic, tagVehicle, tagFurniture, tagCloth, tagVisualArt, tagMusic, tagFood]
tagsAncestors.forEach(tag => tagRoot.moveTagToThisChildren(tag))