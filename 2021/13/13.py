# read and parse the data
points, folds = open("input.txt").read().split("\n\n")
points = set(tuple(map(int,line.split(","))) for line in points.split("\n"))
folds = [fold.split()[-1].split("=") for fold in folds.split("\n")]

# do the folds
for (v, n) in folds:
    if v == "x": points = {(min(p[0],2*int(n)-p[0]), p[1]) for p in points}
    else:        points = {(p[0], min(p[1],2*int(n)-p[1])) for p in points} 

    print(f"Fold: {v}={n}. Points remaining: {len(points)}")

# draw the picture
mx, my = max(p[0] for p in points), max(p[1] for p in points)
for y in range(my+1): print("".join(" #"[(x,y) in points] for x in range(mx+1)))