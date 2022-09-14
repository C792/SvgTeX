from svgwrite import *

dwg = Drawing('svgwrite-example.svg', profile='tiny')

# draw a red box
dwg.add(dwg.rect((10, 10), (300, 200),
    stroke=rgb(10, 10, 16, '%'),
    fill='red')
)

# Draw a small white circle in the top left of box
dwg.add(dwg.circle(center=(25,25),
    r=10,
    stroke=rgb(15, 15, 15, '%'),
    fill='white')
)

# Label this box #1
dwg.add(dwg.text('1',
    insert=(21,30),
    stroke='none',
    fill=rgb(15, 15, 15, '%'),
    font_size='15px',
    font_weight="bold")
)

# Draw some text demonstrating font_size, font_family, font_weight, font_color
dwg.add(dwg.text('ABC',
    insert=(55,125),
    stroke='none',
    fill='#900',
    font_size='90px',
    font_weight="bold",
    font_family="Arial")
)

# Draw some text demonstrating font stroke color
dwg.add(dwg.text('12345',
    insert=(50,180),
    stroke='#500',
    fill='#A90690',
    stroke_width=2,
    font_size='66px',
    font_weight="bold",
    font_family="Courier New")
)

# white text over red box
dwg.add(dwg.text('rectangle w/ black stroke & red fill',
    insert=(40, 40),
    fill='white')
)

# draw a nofill box
dwg.add(dwg.rect((10, 220), (300, 190),
    stroke=rgb(10, 10, 16, '%'),
    fill='none')
)

# black text over nofill box
dwg.add(dwg.text('rectangle w/ black stroke & no fill',
    insert=(40, 250),
    fill='black')
)

# Draw a small white circle in the top left of box
dwg.add(dwg.circle(center=(26,235),
    r=10,
    stroke=rgb(15, 15, 15, '%'),
    fill='#eeeeee')
)

# Label this box #2
dwg.add(dwg.text('2',
    insert=(22,240),
    stroke='none',
    fill=rgb(15, 15, 15, '%'),
    font_size='15px',
    font_weight="bold")
)

# Create a vertical linear gradient and add it the svg's definitions
vert_grad = gradients.LinearGradient(start=(0, 0), end=(0,1), id="vert_lin_grad")
vert_grad.add_stop_color(offset='0%', color='blue', opacity=None)
vert_grad.add_stop_color(offset='50%', color='green', opacity=None)
vert_grad.add_stop_color(offset='100%', color='yellow', opacity=None)
dwg.defs.add(vert_grad)

# draw a box and reference the above gradient definition by #id
dwg.add(dwg.rect((35, 270), (240, 120),
    stroke=rgb(10, 10, 16, '%'),
    fill="url(#vert_lin_grad)"
))

# black text over nofill box
dwg.add(dwg.text('rectangle w/ linear gradient',
    insert=(60, 330),
    fill='white')
)

# draw a blue box
dwg.add(dwg.rect((320,10), (400, 400),
    stroke=rgb(10, 10, 16, '%'),
    fill='blue')
)

# yellow text over blue box
dwg.add(dwg.text('rectangle w/ black stroke & blue fill',
    insert=(360, 40),
    fill='yellow')
)

# Draw a small white circle in the top left of box
dwg.add(dwg.circle(center=(335,25),
    r=10,
    stroke=rgb(15, 15, 15, '%'),
    fill='#eeeeee')
)

# Label this box #3
dwg.add(dwg.text('3',
    insert=(331,30),
    stroke='none',
    fill=rgb(15, 15, 15, '%'),
    font_size='15px',
    font_weight="bold")
)

# lets draw a smiley face
# draw a yellow circle
dwg.add(dwg.circle(center=(520,220),
    r=90,
    stroke=rgb(10, 10, 16, '%'),
    fill='yellow')
)
# draw the left then right eye
dwg.add(dwg.circle(center=(495,195),
    r=10,
    stroke=rgb(10, 10, 16, '%'),
    fill='black')
)
dwg.add(dwg.circle(center=(550,195),
    r=10,
    stroke=rgb(10, 10, 16, '%'),
    fill='black')
)

# draw a cubic-bezier-curve path from 470,240 to 570,240
# using control points 490,290 & 550,290
dwg.add(dwg.path( d='M470,240 C490,290, 550,290, 570,240',
    stroke="#000",
    fill="none",
    stroke_width=12)
)

# output our svg image as raw xml
print(dwg.tostring())

# write svg file to disk
dwg.save()