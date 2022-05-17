const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', lost: 'false' },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', lost: 'false' },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', lost: 'false' },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', lost: 'false' },
  { heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber: 'jjuwu2', lost: 'false' },
  { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', lost: 'false' },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', lost: 'false' }]


let allPackages = packages
let lostPackages = null
let looking = 0


function findPackages() {
  let index = Math.floor(Math.random() * allPackages.length)
  console.log(index);
  allPackages[index].lost = true
  console.log('who is lost?', allPackages[index]);
  lostPackages = allPackages[index]
}

// findPackages()


function drawPackages() {
  let layout = ''
  allPackages.forEach(package => {
    layout += `
    <div class="col-md-3 rounded shadow my-1 p-1 bg-light text-success" ('${package.to}')">
        <p class="text-center"><b>${package.to}, ${package.trackingNumber}</b></p>
      </div>
    `
  })
  document.getElementById('packages').innerHTML = layout
}

// drawPackages()

function isHeavy() {
  let heavyPackages = allPackages.filter(p => p.heavy == true)
  console.log(heavyPackages);
  allPackages = heavyPackages

  drawPackages()
}

function isPriority() {
  let priPackages = allPackages.filter(p => p.priority == true)
  console.log(priPackages);
  allPackages = priPackages

  drawPackages()
}

function isFragile() {
  let fragPackages = allPackages.filter(p => p.fragile == true)
  console.log(fragPackages);
  allPackages = fragPackages

  drawPackages()
}

function isTo(to) {
  let toPackages = allPackages.filter(p => p.to == to)
  console.log(toPackages);
  allPackages = toPackages

  drawPackages()
}

function whereTracking(trackingNumber) {
  let trackPackages = allPackages.filter(p => p.trackingNumber == trackingNumber)
  console.log(trackPackages);
  allPackages = trackPackages

  drawPackages()
}

function find(attribute) {
  looking++
  let findingPackages = allPackages.filter(p => p[attribute] == lostPackages[attribute])
  console.log(findingPackages);
  allPackages = findingPackages

  drawPackages()
}

findPackages()
drawPackages()